/**
 * Example component that demonstrates handling events.  Every component in Vanilla UI
 * library shares the QLD namespace and has access to global functions within
 * this namespace.
 * @namespace QLD
 */

export default {
  init() {
    // Initiate JS logic needed by within the component, pinned to DOMContentLoaded event
    document.addEventListener("DOMContentLoaded", () => {
      // Handle clicks
      this.handleClick(".qld__page-alerts a");

      // Others here...
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
