/**
 * @file call-to-action.stories.js
 * @description Storybook configuration file for the Call to Actions links component.
 * @module call-to-action.stories
 */

import { QGDS } from "../../../js/index.js";
import mockData from "../call-to-action.data.json";

export default {
  title: "2 Globals/Link/Link (Call To Action)",
  render: (args) => {
    try {
      return new QGDS.CallToAction({ data: args }).htmlstring;
    } catch (e) {
      console.log(e);
      return "error:" + JSON.stringify(e) + JSON.stringify(args);
    }
  },

  args: mockData,
  parameters: {
    design: [
      {
        name: "QGDS Text Links Figma Reference Link",
        type: "link",
        url: "https://www.figma.com/design/qKsxl3ogIlBp7dafgxXuCA/QLD-GOV-DDS?node-id=5990-98065",
      },
      {
        name: "QGDS Text Links Figma Reference",
        type: "figma",
        url: "https://www.figma.com/design/qKsxl3ogIlBp7dafgxXuCA/QLD-GOV-DDS?node-id=5990-98065",
      },
    ],
  },
};

/**
 * Default call-to-action story
 */
export const Default = {};

/**
 * View All option
 */
export const ViewAll = {
  args: {
    ...mockData,
    view_all: true,
  },
};

// /**
//  * Default linked_list (inline) story
//  * This is showing buttons list (inline)
//  */
// export const linkedListInline = {
//     label: "Linked List (Inline)",
//     args: exampleButtonsInlineData
// };
