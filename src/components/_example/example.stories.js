/**
 * @file example.stories.js
 * @description Storybook configuration file for the example component.
 * @module example.stories
 */

import ExampleComponent from "./index.js";
const example = new ExampleComponent();

// load helpers handlebars
import Handlebars from "handlebars";
//import handlebarsInit from "../../../helpers/handlebars.init.js";

export default {
    title: "Components / Example Component",
    render: (args) => {
        try {
            return Handlebars.compile(example.template)(args);
        } catch (e) {
            console.log(e);
            return JSON.stringify(e) + JSON.stringify(args);
        }
    },
    args: example.data,

    parameters: {},
};

/**
 * Default
 */

export const Default = {};
