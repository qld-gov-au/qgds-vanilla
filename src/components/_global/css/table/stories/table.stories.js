/**
 * @file table.stories.js
 * @description Storybook configuration file for the Table Component.
 * @module table.stories
 */

import exampleTable1Data from "./example1.json";
import exampleTable2Data from "./example2.json";
import exampleTable3Data from "./example3.json";
import exampleTable4Data from "./example4.json";
import exampleTemplate from "./example.test.hbs?raw";



// load helpers handlebars
import Handlebars from "handlebars";
import handlebarsInit from "./../../../../../helpers/handlebars.init.js";
import {flattenJson, unflattenJson} from "../../../../../../.storybook/helpers.js";


export default {
    title: "Components/Tables/Tables",
    render: ( args) => {
        handlebarsInit(Handlebars)
        try {
            var templateData = Handlebars.compile(exampleTemplate )(unflattenJson(args))
            return `
            ${templateData}
            `
        } catch (e) {
            console.log(e)
            return "error:" + JSON.stringify(e) + JSON.stringify(args);
        }
    },
    args: flattenJson(exampleTable1Data),
    argTypes: {
        "component.data.metadata.id_field.value": {
            control: 'text',
            name: 'ID Field Value',
        },
        "component.data.contained": {
            control: 'boolean',
            name: 'Contained',
        },
        "component.data.caption.header.value": {
            control: 'text',
            name: 'Caption Header',
        },
        "component.data.caption.value": {
            control: 'text',
            name: 'Caption value',
        },
        "component.data.simple_scope": {
            control: 'boolean',
            name: 'Simple Scope (is column) when using auto generate header',
        },
        "component.data.striped": {
            control: 'boolean',
            name: 'Striped table',
        },
        "component.data.col_styles": {
            control: 'check',
            name: 'Border Styles, Right align (for numbers)',
            options: [
                'col-1-right-border', 'col-1-left-border', 'col-1-num',
                'col-2-right-border', 'col-2-left-border', 'col-2-num',
                'col-3-right-border', 'col-3-left-border', 'col-3-num',
                'col-4-right-border', 'col-4-left-border', 'col-4-num',
                'col-5-right-border', 'col-5-left-border', 'col-5-num',
                'col-6-right-border', 'col-6-left-border', 'col-6-num',
                'col-7-right-border', 'col-7-left-border', 'col-7-num',
                'col-8-right-border', 'col-8-left-border', 'col-8-num',
                'col-9-right-border', 'col-9-left-border', 'col-9-num',
                'col-10-right-border', 'col-10-left-border', 'col-10-num',
            ]
        },
        "component.data.footer": {
            control: 'array',
            name: 'Footer items (rows)',
        },
        "component.data.items": {
            control: 'list',
            name: 'table items (rows)',
        }
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
                name: "QGDS Modal (FIXME) Figma Reference Link",
                type: "link",
                url: "https://www.figma.com/design/qKsxl3ogIlBp7dafgxXuCA/QLD-GOV-DDS?node-id=5990-98065",
            },{
                name: "QGDS Modal (FIXME)  Figma Reference",
                type: "figma",
                url: "https://www.figma.com/design/qKsxl3ogIlBp7dafgxXuCA/QLD-GOV-DDS?node-id=5990-98065",
            },
        ]
    },
};

/**
 * Default Modal story
 *
 *
 */
export const Default = {};

/**
 * Example 2
 */
export const complexTable = {
    label: "Table(Complex)",
    args: exampleTable2Data
};

/**
 * Example 3
 */
export const complexTable2 = {
    label: "Table (Complex) example 3",
    args: exampleTable3Data
};

/**
 * Example 4
 */
export const tableColWidthOverrides = {
    label: "Table (Complex) example 4",
    args: exampleTable4Data
};
