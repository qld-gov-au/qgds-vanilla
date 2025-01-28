/**
 * @file index.js
 * @component call-to-action
 * @description Component entry file (index.js).
 * @module CallToAction
 */

// Imports QGDS Component utility:
import QGDSComponent from "./../../js/QGDSComponent.js";

// Imports resources needed to make our component:
import hbstemplate from "./call-to-action.hbs?raw";
import logic from "./call-to-action.js";
import meta from "./version.json";

/**
 * CallToAction component
 * @param {Object} params - Parameters for the component
 * @param {Object} params.data - Data for the component
 * @param {string} [params.template=hbstemplate] - Template for the component
 * @returns {QGDSComponent} - The QGDSComponent instance
 */
export default function CallToAction({ data, template = hbstemplate }) {
  logic.init();

  // Minimum required fields for the component to function
  const props = {
    data: data,
    template: template,
    meta: meta || {},
  };

  return new QGDSComponent("CallToAction", props);
}
