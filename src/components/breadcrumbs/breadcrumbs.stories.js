/**
 * @file breadcrumbs.stories.js
 * @description Storybook configuration file for the breadcrumbs component.
 * @module breadcrumbs.stories
 */

import { QGDS } from "../../js/index.js";
import mockupData from "./breadcrumbs.data.json";

export default {
  title: "3 Layout/Breadcrumbs",
  render: (args) => {
    try {
      return new QGDS.Breadcrumbs({ data: args }).htmlstring;
    } catch (e) {
      return JSON.stringify(e) + JSON.stringify(args);
    }
  },
  args: mockupData,

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
 * Default Breadcrumbs

 */
export const Default = {};
