/**
 * @file example.stories.js
 * @description Storybook configuration file for the example component.
 * @module example.stories
 */

// Imports:
// - the QGDS object containing all components
// - data you need to populate the component for rendering
import { QGDS } from "../../js/index.js";
import mockupData from "./example.data.json";

/* ========= STORIES 👇 ===== */

/**
 * This example component is based on a QGDS Page Alert
 */

export default {
  title: "Components / _Example",
  render: (args) => {
    try {
      return new QGDS.Example({ data: args }).htmlstring;
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
