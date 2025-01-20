/**
 * @file theme_switcher.stories.js
 * @description Storybook configuration file for the theme_switcher component.
 * @module theme_switcher.stories
 */

// Imports:
// - the QGDS object containing all components
// - data you need to populate the component for rendering
import { QGDS } from "../../js/index.js";
import mockupData from "./theme_switcher.data.json";

/* ========= STORIES 👇 ===== */

/**
 * This theme_switcher component is based on a QGDS Page Alert
 */

export default {
  title: "Components / Theme Switcher",
  render: (args) => {
    try {
      return new QGDS.ThemeSwitcher({ data: args }).htmlstring;
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
