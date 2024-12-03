import QGDSComponent from "./../../js/QGDSComponent.js";

import template from "./example.hbs?raw";
import componentJS from "./example.js";
import componentData from "./example.data.json";

export default class Example {
    constructor(data = componentData) {
        componentJS.init();

        // Create a new instance via the QGDSComponent class
        return new QGDSComponent("Example", template, data);
    }
}
