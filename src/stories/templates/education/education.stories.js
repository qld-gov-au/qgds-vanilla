/**
 * @file internalNavigation.stories.js
 * @description Storybook configuration file for the internalNavigation component.
 * @module internalNavigation.stories
 */

// load helpers handlebars
import Handlebars from "handlebars";
import handlebarsInit from "../../../helpers/handlebars.init.js";
import exampleEducation from "./education.test.hbs?raw";

import header from "./education-header.json";
import navigation from "./education-navigation.json";
import mega_main_navigation from "./education-mega_main_navigation.json";
import breadcrumbs from "./education-breadcrumbs.json";
import card_multi_action from "./education-card_multi_action.json";
import accordion from "./education-accordion.json";
import callout from "./education-callout.json";
import button from "./education-button.json";
import horizontal_rule from "./education-horizontal_rule.json";
import pagination from "./education-pagination.json";
import internal_navigation from "./education-internal_navigation.json";
import widgets from "./education-widgets.json";
import banner_intermediate from "./education-banner_intermediate.json";
import footer from "./education-footer.json";

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
  navigation: navigation,
  mega_main_navigation: mega_main_navigation,
  breadcrumbs: breadcrumbs,
  internal_navigation: internal_navigation,
  banner_intermediate: banner_intermediate,
  content: content,
  card_multi_action: card_multi_action,
  accordion: accordion,
  callout: callout,
  button: button,
  horizontal_rule: horizontal_rule,
  pagination: pagination,
  widgets: widgets,
  footer: footer,
  footer_scripts: footer_scripts,
};

export default {
  title: "0.3  Templates and  Patterns/Education",
  render: (args) => {
    handlebarsInit(Handlebars);
    try {
      return Handlebars.compile(exampleEducation)(args);
    } catch (e) {
      console.log(e);
      return JSON.stringify(e) + JSON.stringify(args);
    }
  },
  args: json_data,
};

/**
 * Education

 */
export const Education = {};
