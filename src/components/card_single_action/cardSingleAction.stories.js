/**
 * @file cardSingleAction.stories.js
 * @description Storybook configuration file for the cardSingleAction component.
 * @module cardSingleAction.stories
 */

import cardSingleAction from "./cardSingleAction.json";
import cardSingleActiontemplate from "./cardSingleAction.test.hbs?raw";

// load helpers handlebars
import Handlebars from "handlebars";
import handlebarsInit from "../../helpers/handlebars.init.js";

export default {
  title: "Components/Cards/Cards (Single-action)",
  render: (args) => {
    handlebarsInit(Handlebars);
    try {
      return Handlebars.compile(cardSingleActiontemplate)(args);
    } catch (e) {
      console.log(e);
      return JSON.stringify(e) + JSON.stringify(args);
    }
  },
  args: cardSingleAction,

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
    design: [
      {
        name: "Link",
        type: "link",
        url: "https://www.figma.com/design/qKsxl3ogIlBp7dafgxXuCA/QLD-GOV-DDS?node-id=7229-112138",
      },
      {
        name: "QGDS Figma Reference",
        type: "figma",
        url: "https://www.figma.com/design/qKsxl3ogIlBp7dafgxXuCA/QLD-GOV-DDS?node-id=7229-112138",
      },
      {
        name: "dark xl",
        type: "figma",
        url: "https://www.figma.com/design/qKsxl3ogIlBp7dafgxXuCA/QLD-GOV-DDS?node-id=10865-242473",
      },
    ],
  },
};

/**
 * Default

 */
export const Default = {};
