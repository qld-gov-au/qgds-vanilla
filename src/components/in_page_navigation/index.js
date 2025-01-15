/**
 * @file index.js
 * @module InpageNavigation
 * @description Inpage Navigation Component file.
 *
 * @function InpageNavigation
 * @description The Inpage Navigation component.
 * @param {object} data - The data to be used by the template.
 * @param {string} template - The handlebars template to render.
 * @returns {object} - A new instance of the QGDSComponent class, containing properties: template, meta, htmlstring, node.
 */

// Imports QGDS Component utility:
import QGDSComponent from "./../../js/QGDSComponent.js";

// Imports resources needed to make our "Inpage Navigation" component:
import hbstemplate from "./inpage-navigation.hbs?raw";
import logic from "./inpage-navigation.js";
import meta from "./version.json";

export default function InpageNavigation({ data, template = hbstemplate }) {
  // Initialise Inpage Navigation JS on page load (if data.dynamiclinks is true)
  document.addEventListener("DOMContentLoaded", () => {
    try {
      if (data.source === "dynamic") {
        /**
         * Initialize the logic for Inpage Navigation.
         * @function init
         * @memberof logic
         */
        logic.init();
      }
    } catch (error) {
      console.error(`InpageNavigation error: ${error.message}`);
    }
  });

  //Minimum required fields for the component to function
  const props = {
    data: data,
    template: template,
    meta: meta || {},
  };

  return new QGDSComponent("InpageNavigation", props);
}
