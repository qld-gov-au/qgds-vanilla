/** @type {import('stylelint').Config} */

// Stylelint rules: https://stylelint.io/user-guide/rules/

// Basic stylelint handler for QGDS project
import stylelintFormatter from "./src/js/stylelint.formatter.js";

export default {
  defaultSeverity: "warning",
  customSyntax: "postcss-scss",
  extends: "stylelint-config-standard",
  files: ["./src/**/*.css", "./src/**/*.scss"],
  ignoreFiles: ["./src/**/*.min.css", "./src/**/custom.css"], // or use .stylelintignore
  quiet: false,
  plugins: ["stylelint-scss"],
  formatter: function (results) {
    stylelintFormatter.formatResults(results);
  },
  rules: {
    "alpha-value-notation": ["number"],
    "annotation-no-unknown": [true],
    "at-rule-empty-line-before": ["always"],
    "at-rule-no-unknown": [true],
    "at-rule-no-vendor-prefix": [true],
    "block-no-empty": [true],
    "color-function-notation": ["modern", { disableFix: true }],
    "color-hex-length": ["short"],
    "comment-empty-line-before": ["always"],
    "comment-whitespace-inside": ["always"],
    "custom-property-empty-line-before": ["always", { except: ["after-comment"] }],
    "custom-property-pattern": ["kebab-case", { except: ["after-comment"] }],
    "declaration-block-no-duplicate-properties": [true],
    "declaration-block-no-redundant-longhand-properties": [true],
    "declaration-block-no-shorthand-property-overrides": [true],
    "declaration-empty-line-before": ["always", { except: ["after-comment"] }],
    "function-name-case": ["lower"], // "lower" accepts camelCase e.g. getColor()
    "function-no-unknown": [null],
    "import-notation": ["string", { severity: "warning" }],
    "length-zero-no-unit": [true, { severity: "warning" }],
    "media-feature-range-notation": ["prefix"],
    "no-descending-specificity": [true],
    "no-duplicate-selectors": [true],
    "no-empty-source": [true],
    "no-invalid-double-slash-comments": [true],
    "no-invalid-position-at-import-rule": [true],
    "number-max-precision": 4,
    "property-no-vendor-prefix": [true],
    "rule-empty-line-before": ["always"],
    "selector-attribute-quotes": ["always"],
    "selector-class-pattern": ["^[a-z0-9\\-]+$"],
    "selector-id-pattern": ["^[a-z0-9\\-]+$"],
    "selector-no-vendor-prefix": [true],
    "selector-not-notation": "complex",
    "selector-pseudo-element-colon-notation": "double",
    "selector-type-no-unknown": [true, { ignoreTypes: ["/^QLD-/", "/^QGDS-/"] }],
    "shorthand-property-no-redundant-values": [true],
    "value-no-vendor-prefix": [true],
  },
};
