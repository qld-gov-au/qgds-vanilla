// updateHandlebarsPartialsPlugin.js
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { build } from 'esbuild';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const COMPONENTS_DIR = path.resolve(__dirname, './../../src/components');
const PARTIALS_JS_FILE = path.resolve(__dirname, '../../src/helpers/handlebars.partials.js');


function getAllFiles(dirPath, arrayOfFiles) {
    const files = fs.readdirSync(dirPath, { withFileTypes: true });

    arrayOfFiles = arrayOfFiles || [];

    files.forEach((file) => {
        //console.log(file);
        if (file.isDirectory()) {
            arrayOfFiles = getAllFiles(path.join(dirPath, file.name), arrayOfFiles);
        } else if (file.isFile() && (file.name.endsWith('.hbs') && !file.name.endsWith('.test.hbs'))) {
            arrayOfFiles.push(path.join(dirPath, file.name));
        }
    });

    return arrayOfFiles;
}

function getParentDirectories(pathObject) {
    // Split the path by the '/' separator to get individual parts
    const parts = pathObject.split(path.sep).filter(Boolean);

    // Filter out any empty strings in case of leading '/'
    const filteredParts = parts.filter(Boolean);

    // Access the last and second to last directories if they exist
    const lastFolder = filteredParts[filteredParts.length - 2];
    const secondLastFolder = filteredParts[filteredParts.length - 3];
    const thirdLastFolder = filteredParts[filteredParts.length - 4];

    return { lastFolder, secondLastFolder, thirdLastFolder };
}

export default function QGDSupdateHandlebarsPartialsPlugin() {
    return {
        name: 'update-handlebars-partials',
        setup(build) {
            build.onStart(async () => {

                const files = getAllFiles(COMPONENTS_DIR);
                //console.log(files);
                const fileNames = new Map();
                let duplicateFound = false;

                let importLines = '';
                let registerLines = '';

                for (const file of files) {
                    //console.log(file);
                    let componentName = path.basename(file, '.hbs')

                    // Use the folder name as the component name if the file is named component;
                    if (componentName === 'component') {
                        const parents = getParentDirectories(file)
                        //console.log(parents);
                        if (parents.lastFolder !== 'html') {
                            componentName = parents.lastFolder;
                        } else {
                            componentName = parents.secondLastFolder;
                        }
                    }
                    //console.log(componentName);
                    // Duplicate check
                    if (fileNames.has(componentName)) {
                        console.error(`Error: Duplicate component name found: "${componentName}" second partial located at ${file} and ${fileNames.get(componentName)}`);
                        duplicateFound = true;
                        continue;
                    }
                    fileNames.set(componentName, file);

                    const importName = componentName.replace(/-/g, '');
                    const componentPath = path.relative(path.dirname(PARTIALS_JS_FILE), file).replace(/\\/g, '/');

                    importLines += `import ${importName} from "${componentPath}?raw";\n`;
                    registerLines += `  handlebars.registerPartial("${componentName}", ${importName});\n`;
                }

                if (duplicateFound) {
                    process.exit(1);
                }

                const newContent = `/* global Handlebars */
/** THIS IS A GENERATED FILE **/

${importLines}

/**
 * Registers Handlebars Partials
 * @param {Handlebars} handlebars Templating engine
 * @returns {void} Result of the helper operation
 */
export default function handlebarsPartials(handlebars) {
${registerLines}
}

// For commonJS usage -- Does not run in 'Module' mode.
// In 'Module' mode, you need to init yourself, it will not self initialize.
if(typeof(Handlebars) !== 'undefined') {
  handlebarsPartials(Handlebars);
}
`;

                fs.writeFileSync(PARTIALS_JS_FILE, newContent);
                //console.log(`${PARTIALS_JS_FILE} has been updated.`);
            });
        },
    }
};
