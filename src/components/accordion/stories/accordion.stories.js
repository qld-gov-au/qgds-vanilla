/**
 * @file banner.stories.js
 * @description Storybook configuration file for the Accordion component.
 * @module accordion.stories
 */

import example1 from "../html/example1.json";
import example1template from "./../html/example1.test.hbs?raw";
import example2html from "./../html/example2.html?raw";
import example3html from "./../html/example3.html?raw";
import example4html from "./../html/example4.html?raw";
import example5html from "./../html/example5.html?raw";


// load helpers handlebars
import Handlebars from "handlebars";
import handlebarsInit from "../../../helpers/handlebars.init.js";


export default {
    title: "Components/Accordion",
    render: ( args) => {
        handlebarsInit(Handlebars)
        try {
            return Handlebars.compile(example1template )(args)
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
     * @property {string} design.type - Type of the design parameter.
     * @property {string} design.url - URL of the design parameter.
     */
    parameters: {
        design: {
            name: "QGDS Figma Reference",
            type: "figma",
            url: "https://www.figma.com/design/qKsxl3ogIlBp7dafgxXuCA/QLD-GOV-DDS?node-id=23167-395554",
        },
    },
};

/**
 * Default Accordion story
 */
export const Default = {};

/**
 * Single light
 */
export const SingleLight = {
    render: () => {
        return example2html;

    },
    args: {},
    globals: { theme: 'None'},

}
/**
 * Single dark
 */
export const SingleDark = {
    render: () => {
        return example3html;

    },
    args: {},
    globals: { theme: 'Dark'},

}
/**
 * Multi light
 */
export const MultiLight = {
    render: () => {
        return example4html;

    },
    args: {},
    globals: { theme: 'None'},

}
/**
 * Single dark
 */
export const MultiDark = {
    render: () => {
        return example5html;

    },
    args: {},
    globals: { theme: 'Dark' },

}
