/**
 * @file callout.stories.js
 * @description Storybook configuration file for the callout component.
 * @module callout.stories
 */

import { QGDS } from "../../js/index.js";
import mockupData from "./callout.data.json";

import Handlebars from "handlebars";
import handlebarsInit from "../../helpers/handlebars.init.js";

export default {
  title: "Components / Callout",
  render: (args) => {
    handlebarsInit(Handlebars);
    try {
      return new QGDS.Callout({ data: args }).htmlstring;
    } catch (e) {
      return JSON.stringify(e) + JSON.stringify(args);
    }
  },
  args: mockupData,
  argTypes: {
    background: {
      control: "select",
      options: ["default", "qld__body--light", "qld__body--alt", "qld__body--dark", "qld__body--dark-alt"],
    },
    type: {
      control: "select",
      options: ["callout", "quote"],
    },
    calloutType: {
      control: "select",
      options: ["default", "event"],
    },
    show_heading: {
      control: "boolean",
    },
  },
};

export const CalloutWhite = {
  args: {
    ...mockupData,
    type: "callout",
    calloutType: "default",
    background: "",
    id: "callout1",
    show_heading: true,
    heading: "Title of the callout",
    content:
      "<p>Description of the callout. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Leo, ac ipsum consequat, enim consequat viverra ut eu feugiat. Sed vitae scelerisque aliquet mauris malesuada.</p>",
  },
};

export const CalloutLight = {
  args: {
    ...mockupData,
    type: "callout",
    calloutType: "default",
    background: "qld__body--light",
    id: "callout2",
    show_heading: true,
    heading: "Title of the callout",
    content:
      "<p>Description of the callout. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Leo, ac ipsum consequat, enim consequat viverra ut eu feugiat. Sed vitae scelerisque aliquet mauris malesuada.</p>",
  },
};
export const CalloutAlt = {
  args: {
    ...mockupData,
    type: "callout",
    calloutType: "default",
    background: "qld__body--alt",
    id: "callout3",
    show_heading: true,
    heading: "Title of the callout",
    content:
      "<p>Description of the callout. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Leo, ac ipsum consequat, enim consequat viverra ut eu feugiat. Sed vitae scelerisque aliquet mauris malesuada.</p>",
  },
};
export const CalloutDark = {
  args: {
    ...mockupData,
    type: "callout",
    calloutType: "default",
    background: "qld__body--dark",
    id: "callout4",
    show_heading: true,
    heading: "Title of the callout",
    content:
      "<p>Description of the callout. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Leo, ac ipsum consequat, enim consequat viverra ut eu feugiat. Sed vitae scelerisque aliquet mauris malesuada.</p>",
  },
};
export const CalloutDarkAlt = {
  args: {
    ...mockupData,
    type: "callout",
    calloutType: "default",
    background: "qld__body--dark-alt",
    id: "callout5",
    show_heading: true,
    heading: "Title of the callout",
    content:
      "<p>Description of the callout. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Leo, ac ipsum consequat, enim consequat viverra ut eu feugiat. Sed vitae scelerisque aliquet mauris malesuada.</p>",
  },
};

export const CalloutHeadingScreenReaderOnlyWhite = {
  args: {
    ...mockupData,
    type: "callout",
    calloutType: "default",
    background: "",
    id: "callout6",
    show_heading: false,
    heading: "Title of the callout",
    content:
      "<p>Description of the callout. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Leo, ac ipsum consequat, enim consequat viverra ut eu feugiat. Sed vitae scelerisque aliquet mauris malesuada.</p>",
  },
};

export const CalloutHeadingScreenReaderOnlyLight = {
  args: {
    ...mockupData,
    type: "callout",
    calloutType: "default",
    background: "qld__body--light",
    id: "callout7",
    show_heading: false,
    heading: "Title of the callout",
    content:
      "<p>Description of the callout. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Leo, ac ipsum consequat, enim consequat viverra ut eu feugiat. Sed vitae scelerisque aliquet mauris malesuada.</p>",
  },
};
export const CalloutHeadingScreenReaderOnlyAlt = {
  args: {
    ...mockupData,
    type: "callout",
    calloutType: "default",
    background: "qld__body--alt",
    id: "callout8",
    show_heading: false,
    heading: "Title of the callout",
    content:
      "<p>Description of the callout. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Leo, ac ipsum consequat, enim consequat viverra ut eu feugiat. Sed vitae scelerisque aliquet mauris malesuada.</p>",
  },
};
export const CalloutHeadingScreenReaderOnlyDark = {
  args: {
    ...mockupData,
    type: "callout",
    calloutType: "default",
    background: "qld__body--dark",
    id: "callout9",
    show_heading: false,
    heading: "Title of the callout",
    content:
      "<p>Description of the callout. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Leo, ac ipsum consequat, enim consequat viverra ut eu feugiat. Sed vitae scelerisque aliquet mauris malesuada.</p>",
  },
};
export const CalloutHeadingScreenReaderOnlyDarkAlt = {
  args: {
    ...mockupData,
    type: "callout",
    calloutType: "default",
    background: "qld__body--dark-alt",
    id: "callout10",
    show_heading: false,
    heading: "Title of the callout",
    content:
      "<p>Description of the callout. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Leo, ac ipsum consequat, enim consequat viverra ut eu feugiat. Sed vitae scelerisque aliquet mauris malesuada.</p>",
  },
};
export const DateCalloutWhite = {
  args: {
    ...mockupData,
    type: "callout",
    calloutType: "event",
    background: "",
    id: "callout11",
    show_heading: false,
    heading: "Description of the callout",
    event: {
      intro: "The next public holiday is:",
      dateTime: "2025-01-01 00:00:00Z",
      name: "New Year's Day",
    },
  },
};
export const DateCalloutLight = {
  args: {
    ...mockupData,
    type: "callout",
    calloutType: "event",
    background: "qld__body--light",
    id: "callout12",
    show_heading: false,
    heading: "Description of the callout",
    event: {
      intro: "The next public holiday is:",
      dateTime: "2025-01-01 00:00:00Z",
      name: "New Year's Day",
    },
  },
};
export const DateCalloutAlt = {
  args: {
    ...mockupData,
    type: "callout",
    calloutType: "event",
    background: "qld__body--alt",
    id: "callout13",
    show_heading: false,
    heading: "Description of the callout",
    event: {
      intro: "The next public holiday is:",
      dateTime: "2025-01-01 00:00:00Z",
      name: "New Year's Day",
    },
  },
};
export const DateCalloutDark = {
  args: {
    ...mockupData,
    type: "callout",
    calloutType: "event",
    background: "qld__body--dark",
    id: "callout14",
    show_heading: false,
    heading: "Description of the callout",
    event: {
      intro: "The next public holiday is:",
      dateTime: "2025-01-01 00:00:00Z",
      name: "New Year's Day",
    },
  },
};
export const DateCalloutDarkAlt = {
  args: {
    ...mockupData,
    type: "callout",
    calloutType: "event",
    background: "qld__body--dark-alt",
    id: "callout15",
    show_heading: false,
    heading: "Description of the callout",
    event: {
      intro: "The next public holiday is:",
      dateTime: "2025-01-01 00:00:00Z",
      name: "New Year's Day",
    },
  },
};
export const QuoteWhite = {
  args: {
    ...mockupData,
    type: "quote",
    background: "",
    id: "callout16",
    quote: {
      cite: "https://example.com/source-of-the-quote",
      quote: "The Web as I envisaged it, we have not seen it yet. The future is still so much bigger than the past.",
      source: "Sir Tim Berners-Lee",
    },
  },
};
export const QuoteLight = {
  args: {
    ...mockupData,
    type: "quote",
    background: "qld__body--light",
    id: "callout17",
    quote: {
      cite: "https://example.com/source-of-the-quote",
      quote: "The Web as I envisaged it, we have not seen it yet. The future is still so much bigger than the past.",
      source: "Sir Tim Berners-Lee",
    },
  },
};
export const QuoteAlt = {
  args: {
    ...mockupData,
    type: "quote",
    background: "qld__body--alt",
    id: "callout18",
    quote: {
      cite: "https://example.com/source-of-the-quote",
      quote: "The Web as I envisaged it, we have not seen it yet. The future is still so much bigger than the past.",
      source: "Sir Tim Berners-Lee",
    },
  },
};
export const QuoteDark = {
  args: {
    ...mockupData,
    type: "quote",
    background: "qld__body--dark",
    id: "callout19",
    quote: {
      cite: "https://example.com/source-of-the-quote",
      quote: "The Web as I envisaged it, we have not seen it yet. The future is still so much bigger than the past.",
      source: "Sir Tim Berners-Lee",
    },
  },
};
export const QuoteDarkAlt = {
  args: {
    ...mockupData,
    type: "quote",
    background: "qld__body--dark-alt",
    id: "callout20",
    quote: {
      cite: "https://example.com/source-of-the-quote",
      quote: "The Web as I envisaged it, we have not seen it yet. The future is still so much bigger than the past.",
      source: "Sir Tim Berners-Lee",
    },
  },
};
