/**
 * @file index.js
 * @description ThemeSwitcher Component entry file (index.js).
 * @module theme_switcher
 */

// Imports QGDS Component utility:
import QGDSComponent from "../../js/QGDSComponent.js";

// Imports resources needed to nake our "ThemeSwitcher" component:
import hbstemplate from "./theme_switcher.hbs?raw";
import logic from "./theme_switcher.js";
import meta from "./version.json";

/**
 * @function ThemeSwitcher
 * @description The ThemeSwitcher component.
 * @param {object} data - The data to be used in the template.
 * @param {string} template - The template to render.
 * @returns {object} - A new instance of the QGDSComponent class, contained properties: template, meta, htmlstring, node.
 */

export default function ThemeSwitcher({ data, template = hbstemplate }) {
  logic.init();
  console.log("ThemeSwitcher init");

  //Minimum required fields for the component to function
  const props = {
    data: data,
    template: template,
    required: ["title", "description"],
    meta: meta || {},
  };

  return new QGDSComponent("ThemeSwitcher", props);
}
