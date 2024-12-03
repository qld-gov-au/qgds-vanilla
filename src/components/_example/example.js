/**
 * Example component that demonstrates handling events.  Every component in Vanilla UI
 * library shares the QLD namespace and has access to global functions within
 * this namespace.
 * @namespace QLD
 */

export default {
    init() {
        console.log("The Example component was initialised.");

        // Initiate some event listening within the component
        document.addEventListener("DOMContentLoaded", () => {
            const scope = ".qld__page-alerts a";
            this.handleClick(scope);
        });
    },

    /**
     * Attach a click event handler to a button.
     * @param {HTMLElement} element - The button element to handle.
     */
    handleClick(scope) {
        let nodes = document.querySelectorAll(scope);

        //Iterate over each matching nodes in the document and attach an event listener
        nodes.forEach((node) => {
            node.addEventListener("click", () => {
                console.log(`A link was clicked within the Example component.`);
            });
        });
    },
};
