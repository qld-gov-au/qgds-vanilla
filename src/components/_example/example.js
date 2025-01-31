/**
 * Example component logic attached to an init() function.
 * This logic is imported by the component's entry file (index.js) and ships with the component.
 * @namespace QLD
 */

export default {
  init() {
    // Mockup only:
    // Once DOM is loaded, bind some click events (via local function) to specific DOM node
    document.addEventListener("DOMContentLoaded", () => {
      this.handleClick(".qld__page-alerts a");
    });
  },

  /**
   * Example: Attach a click event handler on the supplied element.
   * @param {HTMLElement} element - A DOM element to handle.
   */

  handleClick(scope) {
    let nodes = document.querySelectorAll(scope);

    //Iterate over each matching nodes in the document and attach an event listener
    nodes.forEach((node) => {
      node.addEventListener("click", (event) => {
        console.log(`A link was clicked within the Example component.`);
      });
    });
  },
};
