/**
 * @file body.stories.js
 * @description Storybook configuration file for the body component.
 * @module body.stories
 */

import example1 from "../html/example1.json";
import example2 from "../html/example2.json";
import example1template from "./example.test.hbs?raw";


// load helpers handlebars
import Handlebars from "handlebars";
import handlebarsInit from "../../../helpers/handlebars.init.js";
import {flattenJson, unflattenJson} from "../../../../.storybook/helpers.js";


export default {
    title: "3 Layout/Body",
    render: ( args) => {
        handlebarsInit(Handlebars)
        try {
            return Handlebars.compile(example1template)(unflattenJson(args))
        } catch (e) {
            console.log(e)
            return JSON.stringify(e) + JSON.stringify(args);
        }
    },
    args: flattenJson(example1),
    argTypes: {
        "component.type": {
            control: 'text',
            name: 'Handlebar fragment lookup',
            disable: true
        },
        "component.data.metadata.id_field.value": {
            control: 'text',
            name: 'ID Field Value',
        },
        "component.data.assetid": {
            control: 'text',
            name: 'Div ID (Squiz only alternative to ID Field Value)',
        },
        "component.data.metadata.background.value": {
            control: 'select',
            name: 'Theme Override',
            options: ['', 'light', 'dark', 'bg-tertiary', 'alt', 'dark-alt']
        },
        "component.data.metadata.body_width.value": {
            control: 'select',
            name: 'Body width',
            options: ['', 'half-width', 'full-width']
        },
        "component.data.content.items": {
            control: 'object',
            name: 'Items to be included inside the body',
        },
        "component.data.content.value": {
            control: 'text',
            name: 'Content (verbatim) alternative to items',
        }
    },


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
 * Default Body

 */
export const Default = {};

/**
 * Example 4
 */
export const exampleBodyWithItems = {
    label: "Body (using items)",
    args: example2
};
