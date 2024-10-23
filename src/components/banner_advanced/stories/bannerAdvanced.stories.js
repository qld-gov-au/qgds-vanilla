/**
 * @file bannerAdvanced.stories.js
 * @description Storybook configuration file for the Banner - Advance component.
 * @module bannerAdvanced.stories
 */

import example1 from "../html/example1.json";
import example1template from "./../html/example1.test.hbs?raw";


// load helpers handlebars
import Handlebars from "handlebars";
import handlebarsInit from "../../../helpers/handlebars.init.js";


export default {
    title: "Components/Banner/Banner (Advanced)",
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
     * @property {string} design.type - Type of the design parameter.
     * @property {string} design.url - URL of the design parameter.
     */
    parameters: {
        design: [{
            name: "QGDS Figma Reference",
            type: "figma",
            url: "https://www.figma.com/design/qKsxl3ogIlBp7dafgxXuCA/QLD-GOV-DDS?node-id=7287-691763",
        },{
            name: "dark xl",
            type: "figma",
            url: "https://www.figma.com/design/qKsxl3ogIlBp7dafgxXuCA/QLD-GOV-DDS?node-id=10865-265620",
        }],
    },
};

/**
 * Default Banner - Advanced story
 *  *        "description": "A more advanced banner component with more features",
 *  *       "version": "0",
 *  *       "status": "In Development"
 * https://www.figma.com/design/qKsxl3ogIlBp7dafgxXuCA/QLD-GOV-DDS?node-id=7287-691763
 */
export const Default = {};
