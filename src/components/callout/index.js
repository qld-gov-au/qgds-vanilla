/**
 * @file index.js
 * @description Example Component entry file (index.js).
 * @module callout
 */

// Imports QGDS Component utility:
import QGDSComponent from "./../../js/QGDSComponent.js";

// Imports resources needed to nake our "Example" component:
import hbstemplate from "./callout.hbs?raw";
import logic from "./callout.js";
import meta from "./version.json";

/**
 * @function Callout
 * @description The Example component.
 * @param {object} data - The data to be used in the template.
 * @param {string} template - The template to render.
 * @returns {object} - A new instance of the QGDSComponent class, contained properties: template, meta, htmlstring, node.
 */

export default function Callout({ data, template = hbstemplate }) {
  logic.init();

  //Minimum required fields for the component to function
  const props = {
    data: data,
    template: template,
    required: ["type", "calloutType"],
    meta: meta || {},
  };

  return new QGDSComponent("Callout", props);
}
