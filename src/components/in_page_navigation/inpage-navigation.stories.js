/**
 * @file inpage-navigation.stories.js
 * @description Storybook configuration file for the Inpage Navigation component.
 * @module inpage-navigation.stories
 */

// Imports:
// - the QGDS object containing all components
// - data you need to populate the component for rendering
import { QGDS } from "../../js/index.js";
import mockupData from "./inpage-navigation.data.json";

/* ========= STORIES 👇 ===== */

export default {
  title: "Components/Navigation (In-page navigation)",
  render: (args) => {
    try {
      return new QGDS.InpageNavigation({ data: args }).htmlstring;
    } catch (e) {
      return JSON.stringify(e) + JSON.stringify(args);
    }
  },
  args: mockupData,

  decorators: [
    (Story) => {
      return `
      <section class="qld__body" style="margin: 1rem 1rem;">
        <div class="container-fluid">
        ${Story()}
        </div>
    </section>`;
    },
  ],

  /**
   * Additional parameters for the story.
   *
   * @type {Object}
   * @property {Object} design - Configuration for the design parameter.
   * @property {string} design.name - Name of the design parameter.
   * @property {string} design.type - Type of the design parameter. figma | link
   * @property {string} design.url - URL of the design parameter.
   */
  parameters: {
    design: [
      {
        name: "Link",
        type: "link",
        url: "https://www.figma.com/design/qKsxl3ogIlBp7dafgxXuCA/QLD-GOV-DDS?node-id=7229-112138",
      },
      {
        name: "QGDS Figma Reference",
        type: "figma",
        url: "https://www.figma.com/design/qKsxl3ogIlBp7dafgxXuCA/QLD-GOV-DDS?node-id=7229-112138",
      },
      {
        name: "dark xl",
        type: "figma",
        url: "https://www.figma.com/design/qKsxl3ogIlBp7dafgxXuCA/QLD-GOV-DDS?node-id=10865-242473",
      },
    ],
  },
};

/**
 * In-page Navigation with Static links (Default)
 */

export const WithStaticLinks = {
  args: {
    ...mockupData,
    source: "static",
  },
};

/**
 * In-page Navigation with dynamic links
 */

export const WithDynamicLinks = {
  args: {
    ...mockupData,
    source: "dynamic",
  },
  decorators: [
    (Story) => {
      return `
        <div id="content" style="margin-top: 4rem;">
        
        <h1>Page title</h1>

        <!-- Dynamic In-page navigation -->
        ${Story()}

        <h2>Section 1</h2>
            <p>
            This inpage navigation list was generated with Javascript that looped over all H2 tags within the #content container.
            </p>
            
        <h2>Section 2</h2>
            <p>This is a paragraph under section 2. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus nec nunc ultricies ultricies.</p>
            
            <h3>Sub-section</h3>
            <p>This is a sub-section under section 2.</p>
            
            <h3>Sub-section</h3>
            <p>This is a sub-section under section 2.</p>
            
        <h2>Section 3</h2>
            <p>
                This is a paragraph under section 3. Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Nullam nec purus nec nunc ultricies ultricies. Nullam nec purus nec nunc ultricies ultricies.
            </p>

        </div>`;
    },
  ],
};
