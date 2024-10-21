/**
 * @file banner.stories.js
 * @description Storybook configuration file for the Accordion component.
 * @module accordion.stories
 */

import exampleSingleData from "./exampleSingle.json";
import examplePrimaryData from "./examplePrimary.json";
import exampleSingleTemplate from "./exampleSingle.test.hbs?raw";
import exampleTemplate from "./example.test.hbs?raw";
import exampleSecondaryData from "./exampleSecondary.json";
import exampleTertiaryData from "./exampleTertiary.json";
import exampleToggleData from "./exampleToggle.json";
import exampleAllThemesData from "./exampleAllTheme.json";
import exampleAllThemesTemplate from "./exampleAllTheme.test.hbs?raw";
// import example2html from "./example2.html?raw";
// import example3html from "./example3.html?raw";
// import example4html from "./example4.html?raw";
// import example5html from "./example5.html?raw";


// load helpers handlebars
import Handlebars from "handlebars";
import handlebarsInit from "./../../../../../helpers/handlebars.init.js";
import {flattenJson, unflattenJson} from "../../../../../../.storybook/helpers.js";

const argsTypesSingle = {
        "component.data.metadata.id_field.value": {
            control: 'text',
            name: 'ID Field Value',
        },
        "component.data.url": {
            control: 'text',
            name: 'URL',
        },
        "component.data.type": {
            control: 'select',
            options: ['primary', 'secondary', 'tertiary', 'toggle'],
            name: 'Button Type',
        },
        "component.data.icon.position": {
            control: 'select',
            options: ['lead', 'trail'],
            name: 'Icon Position',
        },
        "component.data.icon.value": {
            control: 'text',
            name: 'Icon Class',
        },
        "component.data.hover": {
            control: 'text',
            name: 'Hover Text',
        },
        "component.data.disabled": {
            control: 'boolean',
            name: 'Disabled',
        },
        "component.data.value": {
            control: 'text',
            name: 'Button Text',
        },

}

export default {
    title: "2 Globals/Buttons",
    controls: { expanded: true },
    render: ( args) => {
        handlebarsInit(Handlebars)
        try {
            var templateData = Handlebars.compile(args.templateFile )(unflattenJson(args))
            return `
            ${templateData}
            `
        } catch (e) {
            console.log(e)
            return "error:" + JSON.stringify(args) + JSON.stringify(e) + JSON.stringify(args);
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
        design: [{
            name: "QGDS Button link",
            type: "link",
            url: "https://www.figma.com/design/qKsxl3ogIlBp7dafgxXuCA/QLD-GOV-DDS?node-id=23167-395558",
        },{
            name: "QGDS Button",
            type: "figma",
            url: "https://www.figma.com/design/qKsxl3ogIlBp7dafgxXuCA/QLD-GOV-DDS?node-id=23167-395558",
        }, {
            name:"QGDS Button with icons link",
            type: "link",
            url: "https://www.figma.com/design/qKsxl3ogIlBp7dafgxXuCA/QLD-GOV-DDS?node-id=23167-395556",
        }, {
            name:"QGDS Button with icons",
            type: "figma",
            url: "https://www.figma.com/design/qKsxl3ogIlBp7dafgxXuCA/QLD-GOV-DDS?node-id=23167-395556",
        }]
    },
};

/**
 * Default Accordion story
 */
export const Default = {

    args: {
        ...flattenJson(exampleSingleData),
        templateFile: exampleSingleTemplate
    },
    argTypes: {...argsTypesSingle},
};

/**
 * Primary Buttons
 */
export const PrimaryButtons = {
    args: { argTypes: { },
        ...examplePrimaryData,
        templateFile: exampleTemplate
    },
    argTypes: {}
}

/**
 * Secondary Buttons
 */
export const SecondaryButtons = {
    args: { ...exampleSecondaryData,
    templateFile: exampleTemplate},
}
/**
 * Tertiary Buttons
 */
export const TertiaryButtons = {
    args: { ...exampleTertiaryData,
    templateFile: exampleTemplate},
}
/**
 * Toggle Buttons
 */
export const ToggleButtons = {
    args: { ...exampleToggleData,
    templateFile: exampleTemplate},
}
/**
 * All Themes Buttons
 */
export const AllThemesButtons = {
    args: { ...exampleAllThemesData,
    templateFile: exampleAllThemesTemplate},
    globals: { theme: 'Disabled' },
}

// /**
//  * Single light
//  */
// export const SingleLight = {
//     render: () => {
//         return example2html;
//
//     },
//     args: {},
//
// }
// /**
//  * Single dark
//  */
// export const SingleDark = {
//     render: () => {
//         return example3html;
//
//     },
//     args: {},
//
// }
// /**
//  * Multi light
//  */
// export const MultiLight = {
//     render: () => {
//         return example4html;
//
//     },
//     args: {},
//
// }
// /**
//  * Single dark
//  */
// export const MultiDark = {
//     render: () => {
//         return example5html;
//
//     },
//     args: {},
//
// }
