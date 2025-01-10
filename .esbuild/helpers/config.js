import fs from "fs";
import path from "path";

/**
 * @file config.js
 *
 * @description
 * This script dynamically generates SCSS and ESBuild configurations for themes in a Queensland Government design system.
 * It performs the following tasks:
 *
 * 1. **Themes Map Construction**:
 *    - Scans the specified SCSS themes folder (`THEMES_FOLDER`) for palette files.
 *    - Builds a mapping of theme names to their corresponding palette file, SCSS file, and variable file.
 *
 * 2. **SCSS File Validation and Generation**:
 *    - Ensures required SCSS files exist in the `CSS_FOLDER`.
 *    - If missing, creates SCSS files based on a template (`main.scss`) and customizes imports.
 *    - Verifies and optionally fixes `@import` statements in existing SCSS files.
 *
 * 3. **ESBuild Configuration Update**:
 *    - Reads and parses the `esbuild.js` file to extract and preserve existing JavaScript entry points.
 *    - Dynamically generates SCSS entry points for the themes and updates the ESBuild configuration.
 *
 * @usage
 * Run this script to ensure all required theme configurations are in place.
 * Missing files will be generated, and the `esbuild.js` file will be updated accordingly.
 *
 * @note
 * - Generated SCSS files include a warning comment indicating they should not be edited manually.
 * - Ensure this script is executed in the project root directory with appropriate permissions.
 *
 * @dependencies
 * - Node.js built-in modules: `fs`, `path`
 */

const THEMES_FOLDER = "node_modules/@qld-gov-au/qgds-tokens/dist/scss/styles";
const themesMap = {};

fs.readdirSync(THEMES_FOLDER).forEach((file) => {
  const match = file.match(/^qgds-(.+)-palette\.scss$/);
  if (match) {
    const theme = match[1];
    themesMap[theme] = {
      paletteFile: file,
      scss: theme !== "qld-default" ? `main-${theme}` : "main",
      variables: "variables-root.scss",
    };
  }
});

const CSS_FOLDER = "src/css";

Object.entries(themesMap).forEach(([theme, { paletteFile, scss, variables }]) => {
  const scssFile = `${scss}.scss`;
  const filePath = path.join(CSS_FOLDER, scssFile);

  if (!fs.existsSync(filePath)) {
    console.error(`Missing file: ${scssFile}`);
    // Create the file using the base 'main.scss' template
    let defaultMainPath = path.join(CSS_FOLDER, "main.scss");

    let content = fs.readFileSync(defaultMainPath, "utf8");

    // Split the content into lines
    const lines = content.split("\n");
    // Insert the comment on the second line (index 1)
    lines.splice(1, 0, "//GENERATED FILE from main.scss | DO NOT EDIT, delete and run npm run config to regenerate\n");
    // Join the lines back into a single string
    content = lines.join("\n");

    const updatedContent = content
      .replace(
        /@import "..\/..\/node_modules\/@qld-gov-au\/qgds-tokens\/.*?palette\.scss";/,
        `@import "..\/..\/node_modules\/@qld-gov-au/qgds-tokens/dist/scss/styles/${paletteFile}";`,
      )
      .replace(/@import "imports\/variables.*\.scss";/, `@import "imports\/${variables}";`);
    fs.writeFileSync(filePath, updatedContent);
    console.log(`Created file: ${filePath}`);
  } else {
    // Verify the @import statement
    const content = fs.readFileSync(filePath, "utf8");
    if (
      !content.includes(`@qld-gov-au/qgds-tokens/dist/scss/styles/${paletteFile}`) ||
      !content.includes(`@import "imports\/${variables}";`)
    ) {
      console.error(`Invalid @import in file: ${scssFile}`);
      // Optionally fix the file
      const updatedContent = content
        .replace(
          /@import "..\/..\/node_modules\/@qld-gov-au\/qgds-tokens\/.*?palette\.scss";/,
          `@import "..\/..\/node_modules\/@qld-gov-au/qgds-tokens/dist/scss/styles/${paletteFile}";`,
        )
        .replace(/@import "imports\/variables.*\.scss";/, `@import "imports\/${variables}";`);
      fs.writeFileSync(filePath, updatedContent);
      console.log(`Fixed @import in file: ${filePath}`);
    } else {
      console.log(`No changes to @import in file: ${filePath}`);
    }
  }
});

const ESBUILD_FILE = "esbuild.js";

// Read and parse the `esbuild.js` file
let esbuildContent = fs.readFileSync(ESBUILD_FILE, "utf8");

// Extract and preserve JavaScript entry points
const entryRegex = /entryPoints:\s*\[(.*?)\]/s;
const entryMatch = esbuildContent.match(entryRegex);
if (entryMatch) {
  let existingEntries = entryMatch[1]
    .split("},")
    .map((e) => e.trim().replace(/[\s{},]+$/, ""))
    .filter((e) => e.includes("in:") && e.includes(".js"))
    .map((e) => e + ",\n        }"); // Retain existing JS entries

  // Generate SCSS entries based on `themeMap`
  const newEntries = Object.values(themesMap).map(({ scss }) => {
    const scssPath = `./src/css/${scss}.scss`;
    const outputPath = `./assets/css/${scss}.min`;
    return `{
          in: "${scssPath}",
          out: "${outputPath}",
        }`;
  });

  // Combine JS and SCSS entries
  const updatedEntries = [...existingEntries, ...newEntries];

  // Replace `entryPoints` in `esbuild.js`
  esbuildContent = esbuildContent.replace(
    entryRegex,
    `entryPoints: [\n        ${updatedEntries.join(",\n        ")}\n    ]`,
  );

  fs.writeFileSync(ESBUILD_FILE, esbuildContent);
  console.log("Updated esbuild.js with dynamic SCSS entries.");
}

const STORYBOOK_PREVIEW = ".storybook/preview.js";

const content = fs.readFileSync(STORYBOOK_PREVIEW, "utf8");

//convert themesMap to value: sacs, title: space separated
const themeValues = Object.keys(themesMap).map((themeKey) => {
  return {
    value: themesMap[themeKey].scss,
    title: themeKey
      .replace(/-/g, " ") // Replace hyphens with spaces for readability
      .replace(/\b\w/g, (char) => char.toUpperCase()), // Capitalize the first letter of each word
  };
});

const updatedContent = content.replace(
  /const brandToolbarItems.*/,
  `const brandToolbarItems=${JSON.stringify(themeValues)};`,
);
fs.writeFileSync(STORYBOOK_PREVIEW, updatedContent);
