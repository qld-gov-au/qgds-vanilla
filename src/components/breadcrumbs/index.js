/**
 * @file index.js
 * @description Breadcrumbs Component entry file (index.js).
 * @module Breadcrumbs
 */

// Imports QGDS Component utility:
import QGDSComponent from "./../../js/QGDSComponent.js";

// Imports resources needed to nake our "Breadcrumbs" component:
import hbstemplate from "./breadcrumbs.hbs?raw";
import breadcrumbsLogic from "./breadcrumbs.js";
import meta from "./version.json";

/**
 * @function Example
 * @description The Example component.
 * @param {object} data - The data to be used in the template.
 * @param {string} template - The template to render.
 * @returns {object} - A new instance of the QGDSComponent class, contained properties: template, meta, htmlstring, node.
 */

export default function Breadcrumbs({ data, template = hbstemplate }) {
  // Initialise Breadcrumbs JS logic
  const BreadcrumbsLogic = new breadcrumbsLogic();

  window.addEventListener("DOMContentLoaded", () => {
    BreadcrumbsLogic.init();
  });

  window.addEventListener("resize", () => {
    BreadcrumbsLogic.init();
  });

  //Minimum required fields for the component to function
  const props = {
    data: data,
    template: template,
    meta: meta || {},
  };

  return new QGDSComponent("Breadcrumbs", props);
}
