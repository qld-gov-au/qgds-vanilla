import fs from 'fs';
import path from 'path';

/**
 *  This file contains a plugin for Vite and esbuild that embeds SVG files into Handlebars templates.
 *
 *  The format it is looking for is {{ embedSvgs "./image.svg" }}
 *  The regex is:
 *   esbuild: {{\s*embedSvg\s*"([^"]+)"\s*}}
 *   vite : {{\s*embedSvg\s*\\"([^"]+)\\"\s*}}  <-- Vite auto escapes double quotes
 *
 *  The plugin reads the SVG file specified in the embedSvg tag and replaces the tag with the content of the SVG file.
 *
 *  The file path is relative to the Handlebars file that contains the embedSvg tag.
 *
 *  There is also the [embedSvg](./src/helpers/Handlebars/embedSvg.js) helper function.
 *  Do note: rendering when inside handlebars can't relative reference the imported template file.
 */


/**
 * Escapes backslashes, single quotes, and double quotes in a string for JavaScript.
 * @param content
 * @returns {*}
 */

function escapeForJavaScript(content) {
    // Escape backslashes, single quotes, and double quotes
    return content
        .replace(/\\/g, '\\\\')
        .replace(/'/g, "\\'")
        .replace(/"/g, '\\"')
        .replace(/\r?\n/g, '\\n'); // Escape newlines for JavaScript strings
}

export function viteHandlebarsEmbedSvgPlugin() {
    return {
        name: 'vite-embed-svg',
        enforce: 'pre', // Ensure this plugin runs before other transforms
        transform(code, id) {

            if (!id.endsWith('.js') && !id.endsWith('.hbs?raw') && !id.endsWith('.hbs')) {
                return null; // Only process .hbs files
            }

            // if (id.endsWith("/header/html/component.hbs?raw" || id.endsWith("handlebars.partials.js"))) {
            //     console.error(id)
            //     //console.error(code)
            // }
            let changed = false;

            // Regex pattern to match {{embedSvg "file.svg"}}
            const svgEmbedPattern = /{{\s*embedSvg\s*\\"([^"]+)\\"\s*}}/g;

            // Replace {{embedSvg "file.svg"}} with the content of the SVG
            const transformedCode = code.replace(svgEmbedPattern, (match, filePath) => {
                console.error("found embedSvg file:" + path.resolve(path.dirname(id), filePath) + " in file:" + id)
                changed = true
                try {
                    const svgPath = path.resolve(path.dirname(id), filePath);
                    const svgContent = fs.readFileSync(svgPath, 'utf8');
                    return escapeForJavaScript(svgContent);
                } catch (error) {
                    console.error(`Error embedding SVG for ${filePath}:`, error);
                    return match; // Leave the original tag if there's an error
                }
            });

            if (changed) {
                //console.error("returning changed")
                // Return the transformed code
                return transformedCode
            } else {
                // no change
                return null; // Only process .hbs files
            }

        },
    };
}

export function esBuildHandlebarsEmbedSvgPlugin() {
    return {
        name: 'embed-svg',
        setup(build) {
            build.onLoad({ filter: /\.hbs$/ }, async (args) => {
                let contents = await fs.promises.readFile(args.path, 'utf8');

                if (args.path.endsWith("/header/html/component.hbs" || args.path.endsWith("handlebars.partials.js"))) {
                    console.error(args.path)
                    //console.error(contents)
                }

                // Regex pattern to match {{embedSvg "file.svg"}}
                const svgEmbedPattern = /{{\s*embedSvg\s*"([^"]+)"\s*}}/g;

                // Replace {{embedSvg "file.svg"}} with the content of the SVG
                contents = contents.replace(svgEmbedPattern, (match, filePath) => {
                    //console.error(match);
                    //console.error(filePath);
                    try {
                        const dirPath = path.dirname(args.path)
                        const svgPath = path.resolve(path.dirname(args.path), filePath);
                        //console.error(dirPath );
                        //console.error(svgPath );
                        const svgContent = fs.readFileSync(svgPath, 'utf8');

                        return svgContent;
                    } catch (error) {
                        console.error(`Error embedding SVG: ${filePath} in file: ${args.path}`);
                        throw error;
                        //return match; // Leave the original tag if there's an error
                    }
                });

                // Return the modified contents to esbuild
                return {
                    contents,
                    loader: 'text',
                };
            });
        },
    };
}

