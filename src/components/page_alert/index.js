/**
 * @file index.js
 * @description Example Component entry file (index.js).
 * @module pageAlert
 */

// Imports QGDS Component utility:
import QGDSComponent from "./../../js/QGDSComponent.js";

// Imports resources needed to nake our "Example" component:
import hbstemplate from "./page-alert.hbs?raw";
import logic from "./page-alert.js";
import meta from "./version.json";

/**
 * @function PageAlert
 * @description The Example component.
 * @param {object} data - The data to be used in the template.
 * @param {string} template - The template to render.
 * @returns {object} - A new instance of the QGDSComponent class, contained properties: template, meta, htmlstring, node.
 */

export default function PageAlert({ data, template = hbstemplate }) {
  logic.init();

  //Minimum required fields for the component to function
  const props = {
    data: data,
    template: template,
    required: ["type", "title", "description"],
    meta: meta || {},
  };

  return new QGDSComponent("PageAlert", props);
}
