/**
 * @file widgets.stories.js
 * @description Storybook configuration file for the widgets component.
 * @module widgets.stories
 */

import example1 from "../html/example1.json";
import example1template from "./../html/example1.test.hbs?raw";
import example2 from "../html/example1.json";
import example2template from "./../html/example1.test.hbs?raw";


// load helpers handlebars
import Handlebars from "handlebars";
import handlebarsInit from "../../../helpers/handlebars.init.js";


export default {
    title: "Components/Widgets (Back to Top)",
    render: ( args) => {
        handlebarsInit(Handlebars)
        try {
            return Handlebars.compile(example1template)(args)
        } catch (e) {
            console.log(e)
            return JSON.stringify(e) + JSON.stringify(args);
        }
    },
    args: example1,


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
        design: [
            {
                name: "Link",
                type: "link",
                url: "https://www.figma.com/design/qKsxl3ogIlBp7dafgxXuCA/QLD-GOV-DDS?node-id=7229-112138"
            },
            {
                name: "QGDS Figma Reference",
                type: "figma",
                url: "https://www.figma.com/design/qKsxl3ogIlBp7dafgxXuCA/QLD-GOV-DDS?node-id=7229-112138",
            },{
            name: "dark xl",
            type: "figma",
            url: "https://www.figma.com/design/qKsxl3ogIlBp7dafgxXuCA/QLD-GOV-DDS?node-id=10865-242473",
        }],
    },
};

/**
 * Default

 */
export const Default = {};


/**
 * example 2
 */
export const Example2 = {
    render: ( args) => {
        handlebarsInit(Handlebars)
        try {
            return Handlebars.compile(example2template)(args)
        } catch (e) {
            console.log(e)
            return JSON.stringify(e) + JSON.stringify(args);
        }
    },
    args: example2,
};
