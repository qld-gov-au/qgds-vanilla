/**
 * @file index.js
 * @description BackToTop Component entry file (index.js).
 * @module BackToTop
 */

// Imports QGDS Component utility:
import QGDSComponent from "./../../js/QGDSComponent.js";

// Imports resources needed to make our "BackToTop" component:
import hbstemplate from "./back-to-top.hbs?raw";
import logic from "./back-to-top.js";
import meta from "./version.json";

/**
 * @function BackToTop
 * @description The BackToTop component.
 * @param {object} data - The data to be used in the template.
 * @param {string} template - The template to render.
 * @returns {object} - A new instance of the QGDSComponent class, contained properties: template, meta, htmlstring, node.
 */

export default function BackToTop({ data, template = hbstemplate }) {
  logic.init();

  //Minimum required fields for the component to function
  const props = {
    data: data,
    template: template,
    meta: meta || {},
  };

  return new QGDSComponent("BackToTop", props);
}
