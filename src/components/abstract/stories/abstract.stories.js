/**
 * @file abstract.stories.js
 * @description Storybook configuration file for the Abstract component.
 * @module abstract.stories
 */

import example1 from "../html/example1.json";
import example1template from "./../html/example1.test.hbs?raw";


// load helpers handlebars
import Handlebars from "handlebars";
import handlebarsInit from "../../../helpers/handlebars.init.js";
import {flattenJson, unflattenJson} from "../../../../.storybook/helpers.js";


export default {
    title: "Components/Abstract",
    render: ( args) => {
        handlebarsInit(Handlebars)
        try {
            return Handlebars.compile(example1template )(unflattenJson(args))
        } catch (e) {
            console.log(e)
            return JSON.stringify(e) + JSON.stringify(args);
        }
    },
    args: flattenJson(example1),
    argTypes: {
        "component.data.metadata.id_field.value": {
            control: 'text',
            name: 'ID Field Value',
        },
        "component.data.assetid": {
            control: 'text',
            name: 'Asset ID',
            required: false,
            description: 'Asset ID if inside squiz matrix CMS (not required normally)',
        },
        "component.data.content.value": {
            control: 'text',
            name: 'Content Value',
            required: true,
        },
    },


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
 * Default Abstract story
 */
export const Default = {};
