// qgds-plugin-handlebar-helpers-rollup.js
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { build } from 'esbuild';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const HELPERS_DIR = path.resolve(__dirname, './../../src/helpers/Handlebars');
const HELPERS_JS_FILENAME = 'handlebars.helpers.rollup.js';
const HELPERS_JS_FILE = path.resolve(__dirname, '../../src/helpers/', HELPERS_JS_FILENAME);


function getAllFiles(dirPath, arrayOfFiles) {
    const files = fs.readdirSync(dirPath, { withFileTypes: true });

    arrayOfFiles = arrayOfFiles || [];

    files.forEach((file) => {
        //console.log(file.name);
        if (file.isDirectory()) {
            arrayOfFiles = getAllFiles(path.join(dirPath, file.name), arrayOfFiles);
        } else if (file.isFile()
            && (file.name.endsWith('.js')
                && !file.name.endsWith('.test.js')
                && !file.name.endsWith(HELPERS_JS_FILENAME)
            )
        ) {
            arrayOfFiles.push(path.join(dirPath, file.name));
        }
    });

    return arrayOfFiles;
}

export default function QGDSupdateHandlebarsPartialsPlugin() {
    return {
        name: 'update-handlebars-helpers-rollup',
        setup(build) {
            build.onStart(async () => {

                const files = getAllFiles(HELPERS_DIR);
                //console.log(files);
                const fileNames = new Map();
                let duplicateFound = false;

                let importLines = '';
                let registerLines = '';

                for (const file of files) {
                    //console.log(file);
                    const componentName = path.basename(file, '.js')
                    //console.log(componentName);
                    // Duplicate check
                    if (fileNames.has(componentName)) {
                        console.error(`Error: Duplicate component name found: "${componentName}" second partial located at ${file} and ${fileNames.get(componentName)}`);
                        duplicateFound = true;
                        continue;
                    }
                    fileNames.set(componentName, file);

                    const importName = componentName.replace(/-/g, '');
                    const componentPath = path.relative(path.dirname(HELPERS_JS_FILE), file).replace(/\\/g, '/');

                    importLines += `import ${importName} from "./${componentPath}";\n`;
                    registerLines += `  handlebars.registerHelper("${componentName}", ${importName});\n`;
                }

                if (duplicateFound) {
                    process.exit(1);
                }

                const newContent = `/* global Handlebars */
/** THIS IS A GENERATED FILE **/

${importLines}

/**
 * Registers Handlebars Helpers Rollup
 * @param {Handlebars} handlebars Templating engine
 * @returns {void} Result of the helper operation
 */
export default function handlebarsHelpersRollup(handlebars) {
${registerLines}
}

// For commonJS usage -- Does not run in 'Module' mode.
// In 'Module' mode, you need to init yourself, it will not self initialize.
if(typeof(Handlebars) !== 'undefined') {
  handlebarsHelpersRollup(Handlebars);
}
`;

                fs.writeFileSync(HELPERS_JS_FILE, newContent);
                //console.log(`${HELPERS_JS_FILE} has been updated.`);
            });
        },
    }
};
