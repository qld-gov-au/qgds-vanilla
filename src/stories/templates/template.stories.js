
/**
 * @file internalNavigation.stories.js
 * @description Storybook configuration file for the internalNavigation component.
 * @module internalNavigation.stories
 */


// load helpers handlebars
import Handlebars from "handlebars";
import handlebarsInit from "../../../src/helpers/handlebars.init.js";
import example1template from "./example1.test.hbs?raw";

import header from "./../../components/header/html/example1.json";
import navigation from "./../../components/mega_main_navigation/html/example1.json";
import breadcrumbs from "./../../components/breadcrumbs/html/example1.json";
import internal_navigation from "./../../components/internal_navigation/html/example1.json";
import widgets from "./../../components/widgets/html/example1.json";
import footer from "./../../components/footer/html/example1.json";

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
    site: site,
    header: header,
    navigation: navigation,
    breadcrumbs: breadcrumbs,
    internal_navigation: internal_navigation,
    content: content,
    widgets: widgets,
    footer: footer,
    footer_scripts: footer_scripts }

export default {
    title: "0.3  Templates and  Patterns/primary",
    render: ( args) => {
        handlebarsInit(Handlebars)
        try {
            return Handlebars.compile(example1template)(args)
        } catch (e) {
            console.log(e)
            return JSON.stringify(e) + JSON.stringify(args);
        }
    },
    args: json_data,


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
        // design: [
        //     {
        //         name: "Link",
        //         type: "link",
        //         url: "https://www.figma.com/design/qKsxl3ogIlBp7dafgxXuCA/QLD-GOV-DDS?node-id=7229-112138"
        //     },
        //     {
        //         name: "QGDS Figma Reference",
        //         type: "figma",
        //         url: "https://www.figma.com/design/qKsxl3ogIlBp7dafgxXuCA/QLD-GOV-DDS?node-id=7229-112138",
        //     },{
        //         name: "dark xl",
        //         type: "figma",
        //         url: "https://www.figma.com/design/qKsxl3ogIlBp7dafgxXuCA/QLD-GOV-DDS?node-id=10865-242473",
        //     }],
    },
};

/**
 * Default

 */
export const Default = {};
