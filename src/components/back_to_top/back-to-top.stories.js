/**
 * @file back_to_top.stories.js
 * @description Storybook configuration file for the Back To Top component.
 * @module back-to-top.stories
 */

// load helpers handlebars
import Handlebars from "handlebars";
import handlebarsInit from "../../helpers/handlebars.init.js";
import mockupData from "./back-to-top.data.json";

/* ========= STORIES 👇 ===== */

export default {
  title: "Components / Back to Top",
  render: (args) => {
    handlebarsInit(Handlebars);
    try {
      return Handlebars.compile("{{> back-to-top }}")(args);
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
