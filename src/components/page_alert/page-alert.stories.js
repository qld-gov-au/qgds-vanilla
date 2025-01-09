/**
 * @file pageAlert.stories.js
 * @description Storybook configuration file for the pageAlert component.
 * @module pageAlert.stories
 */

import { QGDS } from "../../js/index.js";
import mockupData from "./page-alert.data.json";

// load helpers handlebars
import Handlebars from "handlebars";
import handlebarsInit from "../../helpers/handlebars.init.js";

export default {
  title: "3 Layout/Alerts (In-Page)",
  render: (args) => {
    handlebarsInit(Handlebars);
    try {
      return new QGDS.PageAlert({ data: args }).htmlstring;
    } catch (e) {
      return JSON.stringify(e) + JSON.stringify(args);
    }
  },
  args: mockupData,
  argTypes: {
    type: {
      control: "select",
      options: ["info", "success", "warning", "error"],
    },
  },
};

/**
 * Default

 */
export const Info = {
  args: {
    ...mockupData,
    type: "info",
    heading: "Info alert heading",
  },
};

export const Success = {
  args: {
    ...mockupData,
    type: "success",
    heading: "Success alert heading",
  },
};

export const Warning = {
  args: {
    ...mockupData,
    type: "warning",
    heading: "Warning alert heading",
  },
};

export const Error = {
  args: {
    ...mockupData,
    type: "error",
    heading: "Error alert heading",
  },
};
