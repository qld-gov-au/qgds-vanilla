/**
 * @file tab.stories.js
 * @description Storybook configuration file for the tab component.
 * @module searchBox.stories
 */

import themeColorSchemeData from "../html/theme_color_scheme.json";
import themeColorSchemeTemplate from "../html/theme_color_scheme.test.hbs?raw";

// load helpers handlebars
import Handlebars from "handlebars";
import handlebarsInit from "../../../helpers/handlebars.init.js";

export default {
  title: "Components/Theme Color Scheme",
  render: (args) => {
    handlebarsInit(Handlebars);
    try {
      return Handlebars.compile(themeColorSchemeTemplate)(args);
    } catch (e) {
      console.log(e);
      return JSON.stringify(e) + JSON.stringify(args);
    }
  },
  args: themeColorSchemeData,

  /**
   * Additional parameters for the story.
   *
   * @type {Object}
   * @property {Object} design - Configuration for the design parameter.
   * @property {string} design.name - Name of the design parameter.
   * @property {string} design.type - Type of the design parameter. figma | link
   * @property {string} design.url - URL of the design parameter.
   */
  parameters: {
    design: [],
  },
};

/**
 * Default

 */
export const Default = {};
