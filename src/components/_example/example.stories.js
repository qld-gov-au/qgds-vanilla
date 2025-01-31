/**
 * @file example.stories.js
 * @description Storybook configuration file for the example component.
 * @module example.stories
 */

// load helpers handlebars
import Handlebars from "handlebars";
import handlebarsInit from "../../helpers/handlebars.init.js";
import mockupData from "./example.data.json";

/* ========= STORIES 👇 ===== */

/**
 * This example component is based on a QGDS Page Alert
 */

export default {
  title: "Components / _Example",
  render: (args) => {
    handlebarsInit(Handlebars);
    try {
      return Handlebars.compile("{{> example }}")(args);
    } catch (e) {
      return JSON.stringify(e) + JSON.stringify(args);
    }
  },
  args: mockupData,
  //Allow user to change the "type" property with a dropdown in the Storybook UI
  argTypes: {
    type: {
      control: "select",
      options: ["info", "success", "warning", "error"],
    },
  },
};

export const Info = {
  args: {
    ...mockupData, // Spread mockupData directly here
    type: "info", // Override the `type` for this variant
  },
};

export const Success = {
  args: {
    ...mockupData,
    type: "success",
  },
};

export const Warning = {
  args: {
    ...mockupData,
    type: "warning",
  },
};

export const Error = {
  args: {
    ...mockupData,
    type: "error",
  },
};
