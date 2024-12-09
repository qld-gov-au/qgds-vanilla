/**
 * @file index.js
 * @description Example Component entry file (index.js).
 * @module example
 */

// Imports QGDS Component utility:
import QGDSComponent from "./../../js/QGDSComponent.js";

// Imports resources needed to nake our "Example" component:
import hbstemplate from "./example.hbs?raw";
import logic from "./example.js";
import meta from "./version.json";

/**
 * @function Example
 * @description The Example component.
 * @param {object} data - The data to be used in the template.
 * @param {string} template - The template to render.
 * @returns {object} - A new instance of the QGDSComponent class, contained properties: template, meta, htmlstring, node.
 */

export default function Example({ data, template = hbstemplate }) {
  logic.init();

  //Minimum required fields for the component to function
  const props = {
    data,
    template,
    required: ["title", "description"],
    meta: meta || {},
  };

  return new QGDSComponent("Example", props);
}
