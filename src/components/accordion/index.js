/**
 * @file index.js
 * @description Accordion Component entry file (index.js).
 * @module accordion
 */

// Imports QGDS Component utility:
import QGDSComponent from "./../../js/QGDSComponent.js";

// Imports resources needed to nake our "Accordion" component:
import hbstemplate from "./accordion.hbs?raw";
import meta from "./accordion.data.json";

/**
 * @function Accordion
 * @description The Accordion component.
 * @param {object} data - The data to be used in the template.
 * @param {string} template - The template to render.
 * @returns {object} - A new instance of the QGDSComponent class, contained properties: template, meta, htmlstring, node.
 */

export default function Accordion({ data, template = hbstemplate }) {
  //Minimum required fields for the component to function
  const props = {
    data: data,
    template: template,
    required: ["component", "theme"],
    meta: meta || {},
  };

  return new QGDSComponent("Accordion", props);
}
