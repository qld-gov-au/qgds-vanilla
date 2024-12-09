// scripts/createComponent.js
const fs = require("fs");
const path = require("path");

// Function to create a new component folder and files with boilerplate
function createComponent(name) {
    if (!name) {
        console.error("Error: Component name is required.");
        return;
    }

    const nameUCFirst = name.charAt(0).toUpperCase() + name.slice(1);

    // Check if __dirname is supported, otherwise use process.cwd()
    const currentDir =
        typeof __dirname !== "undefined" ? __dirname : process.cwd();
    
        const baseDir = path.join(currentDir, "../src/components", name);

    const files = [
        "index.js",
        `${name}.js`,
        `${name}.hbs`,
        `${name}.scss`,
        `${name}.test.js`,
        `${name}.data.json`,
        `${name}.stories.js`,
        "version.json",
    ];

    //Check if the component already exists
    if (fs.existsSync(baseDir)) {
        console.error(`Error: Component '${name}' already exists.`);
        return;
    }

    // Create the component directory
    fs.mkdirSync(baseDir, { recursive: true });

    // Create each file with boilerplate content
    files.forEach((file) => {
        const filePath = path.join(baseDir, file);
        let content = "";

        // Default boilerplate content for specific files
        switch (file) {
          case "index.js":
          content = `
// Entry point for the ${nameUCFirst} component

import Component from '../../../js/QGDSComponent.js'

import template from "./${name}.hbs?raw";
import data from './${name}.data.json';


export class ${nameUCFirst} {

  // Uses a global component class to create a new instance of the ${name} component.
  // The constuctor expects: 
  // 1. A handlebars template containing {{ placeholders }}
  // 2. A JSON data object to be rendered by the handlebars template  
  
  constructor( data = {} ) {
    return new Component(template, data);
  }

  export const ${name} = {
    template,
    data,
    logic: {
      init: init${name},
    },
  };
`
};
 
`;
        } else if (file === `${name}.data.json`) {
            content = JSON.stringify(
                {
                    title: `${name} Title`,
                    description: `This is a sample description for the ${name} component.`,
                },
                null,
                2,
            );
        } else if (file === "version.json") {
            content = JSON.stringify({ version: "0.1.0" }, null, 2);
        }

        fs.writeFileSync(filePath, content, { encoding: "utf8" });
    });

    console.log(`Component '${name}' created successfully at ${baseDir}`);
}

// Read the component name from the command-line arguments
const componentName = process.argv[2];
createComponent(componentName);
