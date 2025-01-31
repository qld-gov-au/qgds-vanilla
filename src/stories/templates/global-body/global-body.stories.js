/**
 * @file internalNavigation.stories.js
 * @description Storybook configuration file for the internalNavigation component.
 * @module internalNavigation.stories
 */

// load helpers handlebars
import Handlebars from "handlebars";
import handlebarsInit from "../../../helpers/handlebars.init.js";
import exampleGlobalBody from "./global-body.test.hbs?raw";

import header from "./global-body-header.json";
import mega_main_navigation from "./global-body-mega_main_navigation.json";
import breadcrumbs from "./global-body-breadcrumbs.json";
import internal_navigation from "./global-body-internal_navigation.json";
import global_elements from "./global-body-all_typography.json";
import footer from "./global-body-footer.json";

let footer_scripts = {};
let content = {};
let site = {
  metadata: {
    siteDefaultIcons: {
      value: "./assets/img/svg-icons.svg",
    },
  },
};

let json_data = {
  current: {
    lineage: [
      {
        asset_assetid: "1",
      },
      {
        asset_assetid: "2",
      },
    ],
  },
  site: site,
  header: header,
  mega_main_navigation: mega_main_navigation,
  breadcrumbs: breadcrumbs,
  internal_navigation: internal_navigation,
  global_elements: global_elements,
  content: content,
  footer: footer,
  footer_scripts: footer_scripts,
};

export default {
  title: "0.3  Templates and  Patterns/Global Body",
  render: (args) => {
    handlebarsInit(Handlebars);
    try {
      return Handlebars.compile(exampleGlobalBody)(args);
    } catch (e) {
      console.log(e);
      return JSON.stringify(e) + JSON.stringify(args);
    }
  },
  args: json_data,
};

/**
 * GlobalBody

 */
export const GlobalBody = {};
