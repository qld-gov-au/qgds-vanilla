/* 
  stylelintCustomFormatter: 
  Custom QGDS module to print stylelint results and write to disk
*/

import fs from "fs";
import path from "path";

const formatresults = (results, saveToDisk = true) => {
  let errorCount = 0;
  let warningCount = 0;

  const allResults = results.map(({ source, warnings }) => {
    const errorsOnly = warnings.filter((item) => {
      item.source = source.replace(path.resolve(process.cwd()), ""); // Removes cwd() from source path.
      return item.severity === "error";
    });

    const warningsOnly = warnings.filter((item) => {
      item.source = source.replace(path.resolve(process.cwd()), ""); // Removes cwd() from source path.
      return item.severity === "warning"; // Renamed to avoid shadowing
    });

    //Increment error and warning counts
    errorCount += errorsOnly.length;
    warningCount += warningsOnly.length;

    return {
      source,
      errors: errorsOnly,
      warnings: warningsOnly,
    };
  });

  // Print errors to console (improved formatting)
  allResults.forEach((item) => {
    if (item.errors.length > 0) {
      // Only print if there are errors, use a RED color for better visibility
      console.log(`\n\x1b[31mLint Errors in ${item.source}\x1b[0m`);
      item.errors.forEach((error) => {
        console.log(`  ${error.line}:${error.column} ${error.text}`); // Indentation for better readability
      });
    }
  });

  console.log("\n\n\n\n================================\nSTYLELINT summary:");

  //Errors count
  if (errorCount > 0) {
    console.log(`\n\x1b[31m❌ ${errorCount} errors. These must be fixed\x1b[0m`);
  }

  //Warnings count
  if (warningCount > 0) {
    console.log(`\x1b[34m⚠️ ${warningCount} warnings only. These should be reviewed\x1b[0m`);
  }

  //Success message if errors are zero
  if (errorCount === 0) {
    console.log("\x1b[32m✅ stylelint completed successfully!\x1b[0m\n");
  }

  console.log("\n================================\n");

  //SAVE LINT REPORTS TO DISK
  if (saveToDisk) {
    reports(allResults);
  }

  return allResults;
};

const reports = (allResults) => {
  const reportsDir = path.resolve(process.cwd(), ".reports");

  try {
    // Create parent directories if needed
    fs.mkdirSync(reportsDir, { recursive: true });

    const errors = allResults.flatMap((result) => result.errors);
    const warnings = allResults.flatMap((result) => result.warnings);

    //prettier-ignore
    fs.writeFileSync(
      path.resolve(reportsDir, "stylelint-error-report.json"), 
      JSON.stringify(errors, null, 2), 
      "utf8"
    );

    fs.writeFileSync(
      path.resolve(reportsDir, "stylelint-warning-report.json"),
      JSON.stringify(warnings, null, 2),
      "utf8",
    );

    console.log(`\nReports saved to ${reportsDir} directory.\n\n`);
  } catch (err) {
    console.error("‼️ Error writing reports:", err, "\n\n");
  }
};

export default formatresults;
