// qgds-plugin-handlebar-helpers-rollup.js
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { build } from 'esbuild';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const COMPONENTS_DIR = path.resolve(__dirname, './../../src/components');
const GLOBAL_JS_ROLLUP_FILENAME = 'globals.rollup.js';
const GLOBAL_JS_ROLLUP_FILE = path.resolve(__dirname, '../../src/js', GLOBAL_JS_ROLLUP_FILENAME);


function getAllFiles(dirPath, arrayOfFiles) {
    const files = fs.readdirSync(dirPath, { withFileTypes: true });

    arrayOfFiles = arrayOfFiles || [];

    files.forEach((file) => {
        //console.log(file.name);
        if (file.isDirectory()) {
            arrayOfFiles = getAllFiles(path.join(dirPath, file.name), arrayOfFiles);
        } else if (file.isFile()
            && (file.name === 'global.js' )
        ) {
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

export default function QsdsUpdateGlobalJsRollupPlugin() {
    return {
        name: 'qsds-update-global-js-rollup',
        setup(build) {
            build.onStart(async () => {

                const files = getAllFiles(COMPONENTS_DIR);
                //console.log(files);
                const fileNames = new Map();
                let duplicateFound = false;

                let importLines = '';
                let initLines = '';

                for (const file of files) {
                    //console.log(file);
                    let componentName = path.basename(file, '.js')

                    // Use the folder name as the component name if the file is named component;
                    if (componentName === 'global') {
                        const parents = getParentDirectories(file)
                        //console.log(parents);
                        if (parents.lastFolder !== 'js') {
                            componentName = parents.lastFolder;
                        } else {
                            componentName = parents.secondLastFolder;
                        }
                    }
                    //console.log(file);
                    // Duplicate check
                    if (fileNames.has(componentName)) {
                        console.error(`Error: Duplicate component name found: "${componentName}" second partial located at ${file} and ${fileNames.get(componentName)}`);
                        duplicateFound = true;
                        continue;
                    }
                    fileNames.set(componentName, file);

                    const importName = componentName.replace(/-/g, '');
                    const componentPath = path.relative(path.dirname(GLOBAL_JS_ROLLUP_FILE), file).replace(/\\/g, '/');

                    importLines += `import ${importName} from "./${componentPath}";\n`;
                    initLines += `    ${importName}(QLD);\n`;
                }

                if (duplicateFound) {
                    process.exit(1);
                }

                const newContent = `/** THIS IS A GENERATED FILE **/

${importLines}

export default function init(QLD) {
${initLines}
}

`;

                fs.writeFileSync(GLOBAL_JS_ROLLUP_FILE, newContent);
                //console.log(`${GLOBAL_JS_ROLLUP_FILE} has been updated.`);
            });
        },
    }
};
