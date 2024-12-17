/** @type {import('stylelint').Config} */
export default {
  "customSyntax": "postcss-scss",
  "extends": "stylelint-config-standard",
  "rules": {
    "alpha-value-notation": [true, {"severity": "warning"}],
    "annotation-no-unknown": [true, {"severity": "warning"}],
    "at-rule-empty-line-before": [true, {"severity": "warning"}],
    "at-rule-no-unknown": [true, {"severity": "warning"}],
    "at-rule-no-vendor-prefix": [true, {"severity": "warning"}],
    "block-no-empty": [true, {"severity": "warning"}],
    "color-function-notation": [true, {"severity": "warning"}],
    "color-hex-length": [true, {"severity": "warning"}],
    "comment-empty-line-before": [true, {"severity": "warning"}],
    "comment-whitespace-inside": [true, {"severity": "warning"}],
    "custom-property-empty-line-before": [true, {"severity": "warning"}],
    "custom-property-pattern": [true, {"severity": "warning"}],
    "declaration-block-no-duplicate-properties": [true, {"severity": "warning"}],
    "declaration-block-no-redundant-longhand-properties": [true, {"severity": "warning"}],
    "declaration-block-no-shorthand-property-overrides": [true, {"severity": "warning"}],
    "declaration-empty-line-before": [true, {"severity": "warning"}],
    "function-name-case": [true, {"severity": "warning"}],
    "function-no-unknown": [true, {"severity": "warning"}],
    "import-notation": [true, {"severity": "warning"}],
    "length-zero-no-unit": [true, {"severity": "warning"}],
    "media-feature-range-notation": [true, {"severity": "warning"}],
    "no-descending-specificity": [true, {"severity": "warning"}],
    "no-duplicate-selectors": [true, {"severity": "warning"}],
    "no-empty-source": [true, {"severity": "warning"}],
    "no-invalid-double-slash-comments": [true, {"severity": "warning"}],
    "no-invalid-position-at-import-rule": [true, {"severity": "warning"}],
    "number-max-precision": [true, {"severity": "warning"}],
    "property-no-vendor-prefix": [true, {"severity": "warning"}],
    "rule-empty-line-before": [true, {"severity": "warning"}],
    "selector-attribute-quotes": [true, {"severity": "warning"}],
    "selector-class-pattern": [true, {"severity": "warning"}],
    "selector-id-pattern": [true, {"severity": "warning"}],
    "selector-no-vendor-prefix": [true, {"severity": "warning"}],
    "selector-not-notation": [true, {"severity": "warning"}],
    "selector-pseudo-element-colon-notation": [true, {"severity": "warning"}],
    "selector-type-no-unknown": [true, {"severity": "warning"}],
    "shorthand-property-no-redundant-values": [true, {"severity": "warning"}],
    "value-no-vendor-prefix": [true, {"severity": "warning"}],
  }
};