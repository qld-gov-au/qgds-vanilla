import Handlebars from "handlebars";

export default class Component {
  /**
   * Creates a new instance of the Component class.
   * @param {string} componentName - Name of the component.
   * @param {object} props - Component properties.
   * @param {string} props.template - Handlebars template for rendering.
   * @param {object} props.data - Data for populating the template.
   * @param {object} [props.meta] - Optional metadata for the component.
   */

  constructor(componentName, props) {
    if (!componentName || typeof componentName !== "string") {
      throw new Error("Component name must be a non-empty string.");
    }
    if (!props || typeof props !== "object") {
      throw new Error("Props must be a valid object.");
    }
    if (!props.template || typeof props.template !== "string") {
      throw new Error("A valid template string is required.");
    }
    if (!props.data || typeof props.data !== "object") {
      throw new Error("A valid data object is required.");
    }

    try {
      //Each instance of the component will have these properties
      this.componentName = componentName;
      this.template = props.template;
      this.meta = props.meta || {};
      this.htmlstring = "";
      this.node = null;

      //Basic validation checks on component data
      this.validateData(props.data);

      //Compiled our HTML string (via Handlebars) and a DOM node (via a cloned template.innerHTML method)
      this.setupHTML(props.data);
      this.setupNode();

      console.log(`New ${componentName} component initiated:`);
      console.log(this);
    } catch (error) {
      //Logging
      throw new Error(`${this.componentName} error: ${error.message}`);
    }
  }

  /**
   * @description Compiles the Handlebars template with the supplied data.
   * @param {object} data - Data object to populate the template
   */

  setupHTML(data) {
    try {
      this.htmlstring = Handlebars.compile(this.template)(data);
    } catch (error) {
      throw new Error(`${this.componentName} error: Template compilation failed. ${error.message}`);
    }
  }

  /**
   * @description Creates a DOM node from the HTML string.
   */

  setupNode() {
    try {
      const container = document.createElement("template");
      container.innerHTML = this.htmlstring;
      this.node = container.content.cloneNode(true);
    } catch (error) {
      throw new Error(`${this.componentName} error: Failed to create a DOM node. ${error.message}`);
    }
  }

  /**
   * @description Validates the data object to ensure it has some basic required fields.
   * @param {object} data - Data object to validate.
   * @param {array} requiredfields - Array of required fields.
   * @throws {Error} Throws an error if the data object is missing or invalid.
   */

  validateData(data, requiredfields = []) {
    if (!data || Object.keys(data).length === 0) {
      throw new Error(`${this.componentName} error: Data object is missing or invalid.`);
    }

    const missing = requiredfields.filter((key) => !data.hasOwnProperty(key));
    if (missing.length > 0) {
      throw new Error(`${this.componentName} error: Missing required fields: ${missing.join(", ")}`);
    }
  }
}
