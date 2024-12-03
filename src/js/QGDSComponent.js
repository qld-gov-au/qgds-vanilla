import Handlebars from "handlebars";

export default class Component {
    /**
     * Creates a new instance of the Component class.
     * @param {string} template - The template to render.
     * @param {object} data - The data to be used in the template.
     *
     */

    constructor(componentName, template, data = {}) {
        this.template = template;
        this.data = data;
        this.htmlstring;
        this.node;

        this.makeHTML();
        this.makeNode();
        this.makeData();
    }

    makeHTML() {
        this.htmlstring = Handlebars.compile(this.template)(this.data);
    }

    makeNode() {
        if (!this.htmlstring) {
            console.error(
                `The ${componentName} component was not rendered. The source template is missing or invalid.`,
            );
            return false;
        }

        try {
            // Convert the HTML string into a DOM Node fragment
            const container = document.createElement("template");
            container.innerHTML = this.htmlstring;
            this.node = container.content.cloneNode(true);
        } catch (error) {
            console.error("Error rendering template:", error);
            return false;
        }
    }

    makeData() {
        if (!this.data) {
            console.error(
                `The ${componentName} component was not rendered. The source data is missing or invalid.`,
            );
            return false;
        }
    }
}
