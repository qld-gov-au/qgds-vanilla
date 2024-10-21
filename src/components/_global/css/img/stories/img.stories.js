/**
 * @file img.stories.js
 * @description Storybook configuration file for the Image component.
 * @module linkedList.stories
 */

import exampleImageData from "./eampleImg.json";
import exampleTemplate from "./example.test.hbs?raw";



// load helpers handlebars
import Handlebars from "handlebars";
import handlebarsInit from "./../../../../../helpers/handlebars.init.js";
import { unflattenJson, flattenJson } from "./../../../../../../.storybook/helpers.js";

export default {
    title: "1. Styles/Imagery (Image)",
    render: ( args) => {
        //must unflatten when rendering
        handlebarsInit(Handlebars)
        try {
            var templateData = Handlebars.compile(exampleTemplate )(unflattenJson(args))
            return `
            ${templateData}
            `
        } catch (e) {
            console.log(e)
            return "error:" + JSON.stringify(e) + JSON.stringify(unflattenJson(args));
        }
    },
    //Must flatten for storybook to show controls correctly
    args: flattenJson(exampleImageData),
    argTypes: {
        'component.data.metadata.id_field.value': {
            control: 'text',
            label: 'ID Field Value',
            name: 'ID',
        },
        "component.data.src": {
            control: 'text',
            name: 'Image Source',
        },
        "component.data.alt": {
            control: 'text',
            name: 'Alt Text',
        },
        "component.data.caption": {
            control: 'text',
            name: 'Caption',
        },
        "component.data.rightAligned": {
            control: 'boolean',
            name: 'Right Aligned',
        },
        "component.data.responsive": {
            control: 'boolean',
            name: 'Responsive',
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
        design: [
            {
            name: "QGDS Figma Reference Link",
            type: "link",
            url: "https://www.figma.com/design/qKsxl3ogIlBp7dafgxXuCA/QLD-GOV-DDS?node-id=5990-97962",
        },
            {
                name: "QGDS Figma Reference",
                type: "figma",
                url: "https://www.figma.com/design/qKsxl3ogIlBp7dafgxXuCA/QLD-GOV-DDS?node-id=5990-97962",
            },
            ]
    },
};

/**
 * Default Image story
 * This is showing image
 */
export const Default = {};

// /**
//  * Default linked_list (inline) story
//  * This is showing buttons list (inline)
//  */
// export const linkedListInline = {
//     label: "Linked List (Inline)",
//     args: exampleButtonsInlineData
// };
