/**
 * @file back_to_top.stories.js
 * @description Storybook configuration file for the Back To Top component.
 * @module back_to_top.stories
 */

// Imports:
// - the QGDS object containing all components
// - data you need to populate the component for rendering
import { QGDS } from "../../js/index.js";
import mockupData from "./back-to-top.data.json";

/* ========= STORIES 👇 ===== */

export default {
  title: "Components / Back To Top",
  render: (args) => {
    try {
      return new QGDS.BackToTop({ data: args }).htmlstring;
    } catch (e) {
      return JSON.stringify(e) + JSON.stringify(args);
    }
  },
};

// Default Story
//
export const Default = {
  args: {
    ...mockupData,
  },
};
