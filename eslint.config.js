import globals from "globals";
import pluginJs from "@eslint/js";
import prettierPlugin from "eslint-plugin-prettier"; // Prettier plugin
import jsonPlugin from "eslint-plugin-json"; // JSON plugin
import storybookPlugin from "eslint-plugin-storybook"; // Storybook plugin

/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    ignores: [
      "*.min.js",
      "storybook-static/**",
      "dist/**",
      "src/helpers/handlebars.init.cjs",
    ], // Ensure this is at the top level
  },
  {
    files: ["*.js", "*.mjs"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      globals: globals.es2021, // Use recommended globals for ES2021
    },
    plugins: {
      prettier: prettierPlugin,
      json: jsonPlugin,
      storybook: storybookPlugin,
    },
    rules: {
      ...pluginJs.configs.recommended.rules, // Use recommended rules
      "prettier/prettier": ["error"],
      "comma-dangle": [1, "always-multiline"],
      // stylisticJs.js.indent: ["warn", 2],
      "one-var": 0,
      "no-tabs": 0,
      "no-path-concat": 0,
      // "valid-jsdoc": "warn",
      "spaced-comment": 0,
      "space-before-blocks": 0,
      "space-before-function-paren": 0,
      "eol-last": 1,
      "no-mixed-spaces-and-tabs": 0,
      "no-multi-spaces": [
        2,
        {
          exceptions: {
            Property: true,
            VariableDeclarator: true,
            ImportDeclaration: true,
            ObjectExpression: true,
          },
        },
      ],
      "no-warning-comments": 1,
    },
  },
  {
    files: [".eslintrc.{js,cjs}"],
    languageOptions: {
      sourceType: "script", // For CommonJS files
    },
  },
];
