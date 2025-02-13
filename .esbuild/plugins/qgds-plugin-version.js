import { promises as fs } from 'fs';
import path from 'path';
import { execSync } from 'child_process';
import { fileURLToPath } from 'url';
import listFilesHbs, {listFiles, listFilesJS} from "../helpers/listFilesHbs.js";

// Helper function to get git information
const getGitInfo = () => {
    const getGitBranch = () => {

        try {
            return  execSync('git rev-parse --abbrev-ref HEAD').toString().trim();
        } catch {
            return ``;
        }
    }
    const getGitTag = () => {

        try {
            return execSync('git describe --tags --exact-match 2>/dev/null').toString().trim();
        } catch {
            return ``;
        }
    };
    const getGitCommit = () => {

        try {
            return execSync('git rev-parse HEAD').toString().trim();
        } catch {
            return ``;
        }
    }
    const getGitCommitDate = () => {
        try {
            execSync('git log -1 --format=%cI').toString().trim();
        } catch {
            return ``;
        }
    }

    var output = {
        branch: getGitBranch(),
        tag: getGitTag(),
        commit: getGitCommit(),
        datetime: getGitCommitDate(),
    };
    return output
};

// Function to extract major version prefix from a tag
const extractMajorVersion = (tag) => {
    if (tag.startsWith('v')) {
        // Format 'vX.Y.Z' -> 'vX'
        return tag.split('.')[0];
    } else {
        // Split by non-alphanumeric characters and take the first part
        return tag.split(/[^a-zA-Z0-9]/)[0];
    }
};

// Helper function to get package.json info
const getPackageJson = async () => {
    const __dirname = path.dirname(fileURLToPath(import.meta.url));
    const packageJsonPath = path.resolve(__dirname, '../../package.json');
    const packageJson = JSON.parse(await fs.readFile(packageJsonPath, 'utf8'));
    return {
        project_id: packageJson.name,
        version: packageJson.version,
    };
};

// Create the plugin
const versionPlugin = () => ({
    name: 'version-plugin',
    setup(build) {
        // Get version details
        let versionDetails;
        build.onStart(async () => {
            const packageInfo = await getPackageJson();
            var majorVersion = extractMajorVersion('v' + packageInfo.version)
            var gitInfo = getGitInfo();

            versionDetails = {
                ...packageInfo,
                ...gitInfo,
                majorVersion: majorVersion,
            };
            //log( "green", `Version details collected: ${JSON.stringify(versionDetails)}`);
            //log( "black", "");
        });



        // Replace placeholders in HTML, Mustache, and Handlebars files
        build.onEnd(async (result) => {
            //log( "green", 'version update starting...');

            //List new components
            const root = process.cwd();
            const relativePath = "/dist";

            const newTemplateFiles = listFiles(root + relativePath);
            //console.log(newTemplateFiles)
            for (const file of newTemplateFiles) {
                if (/\.(js|html|hbs)$/.test(file)) {
                    // const outputPath = path.resolve(process.cwd(), file);
                    let source = await fs.readFile(file, 'utf8');
                    let newSource = source.replace(/###VERSION###/g, JSON.stringify(versionDetails));

                    // Replace major version placeholder if present
                    newSource = newSource.replace(/###MAJOR_VERSION###/g, versionDetails.majorVersion);

                    // Check if the content has changed
                    if (source !== newSource) {
                         //console.log(`Placeholder replaced in: ${file}, ${newSource}`);
                         //console.log(`Placeholder replaced in: ${file}`);
                        await fs.writeFile(file, newSource);
                    }
                }
            }

            //log( "green", 'version update Completed');

        });

    },
});

export { versionPlugin };
