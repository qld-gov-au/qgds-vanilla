/**
 * @file banner.stories.js
 * @description Storybook configuration file for the Accordion component.
 * @module accordion.stories
 */

import { QGDS } from "../../js/index.js";
import mockupData from "./accordion.data.json";

export default {
  title: "Components / Accordion",
  render: (args) => {
    try {
      return new QGDS.Accordion({ data: args }).htmlstring;
    } catch (e) {
      return JSON.stringify(e) + JSON.stringify(args);
    }
  },
  args: mockupData,
  argTypes: {
    theme: {
      control: "select",
      options: ["light", "alt", "dark", "dark-alt"],
    },
  },
};

export const Light = {
  args: {
    ...mockupData,
    theme: "light",
    heading: "Light Single.",
    toggle_all: false,
    id: "124",
    component: [
      {
        com_id: "1",
        title: "Accordion Heading 01",
        content:
          "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>",
      },
    ],
  },
};
export const Alt = {
  args: {
    ...mockupData,
    theme: "alt",
    toggle_all: false,
    id: "125",
    component: [
      {
        com_id: "1",
        title: "Accordion Heading 01",
        content:
          "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>",
      },
    ],
  },
};
export const Dark = {
  args: {
    ...mockupData,
    theme: "dark",
    toggle_all: false,
    id: "126",
    component: [
      {
        com_id: "1",
        title: "Accordion Heading 02",
        content:
          "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>",
      },
    ],
  },
};
export const DarkAlt = {
  args: {
    ...mockupData,
    theme: "dark-alt",
    toggle_all: false,
    id: "127",
    component: [
      {
        com_id: "1",
        title: "Accordion Heading 02",
        content:
          "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>",
      },
    ],
  },
};
export const LightGroup = {
  args: {
    ...mockupData,
    theme: "light",
    id: "128",
  },
};
export const LightAltGroup = {
  args: {
    ...mockupData,
    theme: "alt",
    id: "129",
  },
};
export const DarkGroup = {
  args: {
    ...mockupData,
    theme: "dark",
    id: "130",
  },
};
export const DarkAltGroup = {
  args: {
    ...mockupData,
    theme: "dark-alt",
    id: "131",
  },
};
