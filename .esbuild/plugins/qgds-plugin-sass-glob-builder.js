// qgds-plugin-sass-glob-builder.js
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const COMPONENTS_DIR = path.resolve(__dirname, './../../src/components');
const PARTIALS_JS_FILE = path.resolve(__dirname, '../../src/css/components.scss');


function getAllFiles(dirPath, arrayOfFiles) {
    const files = fs.readdirSync(dirPath, { withFileTypes: true });

    arrayOfFiles = arrayOfFiles || [];

    files.forEach((file) => {
        //console.log(file);
        if (file.isDirectory()) {
            arrayOfFiles = getAllFiles(path.join(dirPath, file.name), arrayOfFiles);
        } else if (file.isFile() && (file.name.endsWith('.scss') && !file.name.endsWith('.test.scss'))) {
            arrayOfFiles.push(path.join(dirPath, file.name));
        }
    });

    return arrayOfFiles;
}

export default function QGDSupdateHandlebarsPartialsPlugin() {
    return {
        name: 'update-scss-partials',
        setup(build) {
            build.onStart(async () => {

                const files = getAllFiles(COMPONENTS_DIR);

                let importLines = '';

                for (const file of files) {

                    const componentPath = path.relative(path.dirname(PARTIALS_JS_FILE), file).replace(/\\/g, '/');

                    importLines += `@import "${componentPath}";\n`;
                }


                const newContent = `
/** THIS IS A GENERATED FILE **/

${importLines}
`;

                fs.writeFileSync(PARTIALS_JS_FILE, newContent);
                //console.log(`${PARTIALS_JS_FILE} has been updated.`);
            });
        },
    }
};
