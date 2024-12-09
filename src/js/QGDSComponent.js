import Handlebars from "handlebars";

export default class Component {
  /**
   * Creates a new instance of the Component class.
   * @param {string} template - The template to render.
   * @param {object} data - The data to be used in the template.
   *
   */

  constructor(componentName, props) {
    try {
      console.log("Component constructor request:\n", componentName, props);
      this.componentName = componentName;

      this.template = props.template;
      this.meta = props.meta;
      this.htmlstring = "";
      this.node = false;

      //Basic validation of the data needed by the component
      this.checkData(props);

      // We pass data directly to the function, rather than as a property of the class
      // This is to keep the class as lightweight as possible
      this.setupHTML(props.data);
      this.setupNode(props.data);

      console.log("Component constructor response:\n", this);

      //...
    } catch (error) {
      throw new Error(`${this.componentName} error: An error occurred while creating the component: ${error}`);
    }
  }

  setupHTML(data) {
    try {
      this.htmlstring = Handlebars.compile(this.template)(data);
    } catch (error) {
      throw new Error(`${this.componentName} error: A handlebars template could not be compiled. ${error}`);
    }
  }

  setupNode(data) {
    try {
      // Convert the HTML string into a DOM Node fragment
      const container = document.createElement("template");
      container.innerHTML = this.htmlstring;
      this.node = container.content.cloneNode(true);
    } catch (error) {
      throw new Error(`${this.componentName} error: A handlebars template could not be compiled. ${error}`);
    }
  }

  checkData(data, requiredfields = []) {
    //Check for the data object
    if (!data || data.length === 0) {
      throw new Error(
        `${this.componentName} error: The data object is missing or invalid. The data object is ${JSON.stringify(data)}`,
      );
    }

    //Check for expected values in the data object; if any are missing, log an error
    if (requiredfields.length > 0) {
      let missing = [];

      for (const key of required) {
        if (!data.hasOwnProperty(key)) {
          missing.push(key);
        }
      }

      if (missing.length > 0) {
        throw new Error(
          `${this.componentName} error: The source data is missing these required fields: ${missing.join(", ")}`,
        );
      }
    }
  }
}
