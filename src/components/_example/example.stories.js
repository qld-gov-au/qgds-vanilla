/**
 * @file example.stories.js
 * @description Storybook configuration file for the example component.
 * @module example.stories
 */

// Imports:
// - the QGDS object containing all components
// - data you need to populate the component for rendering
import { QGDS } from "../../js/index.js";
import data from "./example.data.json";

//Create instance of the component
const Example = new QGDS.Example(data);

/* ========= STORIES 👇 ===== */

/**
 * This example component is based on a QGDS Page Alert
 */

export default {
  title: "Components / _Example",
  render: (args) => {
    try {
      return new QGDS.Example(args).htmlstring;
    } catch (e) {
      console.log(e);
      return JSON.stringify(e) + JSON.stringify(args);
    }
  },
  args: data,
  //Allow user to change the "type" property with a dropdown in the Storybook UI
  argTypes: {
    type: {
      control: "select",
      options: ["info", "success", "warning", "error"],
    },
  },
};

/**
 * Info variant <code>.qld__page-alerts--info</code>
 */

export const Info = {
  args: {
    data,
    ...{ type: "info" },
  },
};

/**
 * Success variant <code>.qld__page-alerts--success</code>
 */

// export const Success = {
//   args: {
//     data,
//     ...{ type: "success" },
//   },
// };

/**
 * Warning variant: <code>.qld__page-alerts--warning</code>
 */

// export const Warning = {
//   args: {
//     data,
//     ...{ type: "warning" },
//   },
// };

/**
 * Error variant <code>.qld__page-alerts--error</code>
 */

// export const Error = {
//   args: {
//     data,
//     ...{ type: "error" },
//   },
// };
