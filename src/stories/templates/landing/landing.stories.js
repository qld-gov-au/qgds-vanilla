
/**
 * @file internalNavigation.stories.js
 * @description Storybook configuration file for the internalNavigation component.
 * @module internalNavigation.stories
 */


// load helpers handlebars
import Handlebars from "handlebars";
import handlebarsInit from "../../../helpers/handlebars.init.js";
import exampleLanding from "./landing.test.hbs?raw";

import header from "./landing-header.json";
import navigation from "./landing-navigation.json";
import mega_main_navigation from "./landing-mega_main_navigation.json";
import breadcrumbs from "./landing-breadcrumbs.json";
import card_multi_action from "./landing-card_multi_action.json";
import accordion from "./landing-accordion.json";
import callout from "./landing-callout.json";
import button from "./landing-button.json";
import horizontal_rule from "./landing-horizontal_rule.json";
import pagination from "./landing-pagination.json";
import internal_navigation from "./landing-internal_navigation.json";
import widgets from "./landing-widgets.json";
import banner_intermediate from "./landing-banner_intermediate.json";
import footer from "./landing-footer.json";

let footer_scripts = {};
let content = {};
let site = {
        "metadata": {
            "siteDefaultIcons": {
                "value": "./assets/img/svg-icons.svg"
            },
        }
    }

let json_data = {
    current: {
        lineage: [
            {
                "asset_assetid": "1"
            },
            {
                "asset_assetid": "2"
            }
        ]
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
    footer_scripts: footer_scripts
}

export default {
    title: "Landing",
    render: ( args) => {
        handlebarsInit(Handlebars)
        try {
            return Handlebars.compile(exampleLanding)(args)
        } catch (e) {
            console.log(e)
            return JSON.stringify(e) + JSON.stringify(args);
        }
    },
    args: json_data,
};

/**
 * Landing

 */
export const Landing = {};
