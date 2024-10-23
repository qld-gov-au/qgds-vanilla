/**
 * @file a-z_listing.stories.js
 * @description Storybook configuration file for the a-z_listing component.
 * @module abstract.stories
 */

import example1 from "../html/example1.json";
import example1template from "./../html/example1.test.hbs?raw";


// load helpers handlebars
import Handlebars from "handlebars";
import handlebarsInit from "../../../helpers/handlebars.init.js";


export default {
    title: "Components/A-Z Listing",
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
            type: "link", //figma
            url: "https://www.figma.com/design/qKsxl3ogIlBp7dafgxXuCA/QLD-GOV-DDS?node-id=6182-27290",
        },
    },
};

/**
 * Default A-L Listing story
 */
export const Default = {};
