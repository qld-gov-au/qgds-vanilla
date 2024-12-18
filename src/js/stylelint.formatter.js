import fs from "fs";
import path from "path";
import log from "../../.esbuild/helpers/logger.js";

const stylelintFormatter = {
  formatResults: function (results) {
    //Iterate stylelint results, group into errors and warning arrays
    const summary = this.processResults(results);

    //Log summary to console
    log("black", "\n================================\n\nSTYLELINT summary:\n");
    this.logSummary(summary);

    //Save logs to disk
    this.saveReports(summary);

    //Update console IF errors are found
    if (summary.errorCount > 0) {
      log("red", "\n\u2717 Stylelint failed with errors.\n");
    }

    log("black", "\n================================\n\n");

    return summary;
  },

  processResults: function (results) {
    let errorCount = 0;
    let warningCount = 0;

    const processedResults = results.map(({ source, warnings }) => {
      const filteredErrors = this.filterResults(warnings, "error", source);
      const filteredWarnings = this.filterResults(warnings, "warning", source);

      errorCount += filteredErrors.length;
      warningCount += filteredWarnings.length;

      return { source, errors: filteredErrors, warnings: filteredWarnings };
    });

    return { errorCount, warningCount, processedResults };
  },

  filterResults: function (warnings, severity, source) {
    return warnings.filter((item) => {
      item.source = source.replace(path.resolve(process.cwd()), "");
      return item.severity === severity;
    });
  },

  logSummary: function ({ errorCount, warningCount }) {
    const errorColour = errorCount > 0 ? "red" : "green";
    const warningColour = warningCount > 0 ? "yellow" : "green";

    const errorIcon = errorCount > 0 ? "\u2717" : "\u2713";
    const warningIcon = warningCount > 0 ? "\u2717" : "\u2713";

    log(errorColour, `${errorIcon} ${errorCount} errors.`);
    log(warningColour, `${warningIcon} ${warningCount} warnings.`);
  },

  saveReports: function (summary) {
    const { processedResults } = summary;
    const reportsDir = path.resolve(process.cwd(), ".reports");

    const errorLog = path.resolve(reportsDir, "stylelint-error-report.json");
    const warningLog = path.resolve(reportsDir, "stylelint-warning-report.json");

    try {
      //Create reports directory if it doesn't exist
      fs.mkdirSync(reportsDir, { recursive: true });

      //Group all errors and warnings into separate arrays
      const errors = processedResults.flatMap(({ errors }) => errors);
      const warnings = processedResults.flatMap(({ warnings }) => warnings);

      //Write to JSON log files
      fs.writeFileSync(errorLog, JSON.stringify(errors, null, 2), "utf8");
      fs.writeFileSync(warningLog, JSON.stringify(warnings, null, 2), "utf8");

      //Update console
      log("black", `\nLogs:\n${errorLog}\n${warningLog}`);
    } catch (err) {
      log("red", `Error writing reports: ${err} \n\n`);
    }
  },
};

export default stylelintFormatter;
