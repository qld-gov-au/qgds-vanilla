import Handlebars  from "handlebars";

/**
 * Embeds an SVG file into the template
 *
 *  Do note: rendering when inside handlebars will not be relative to a imported template file.
 *
 *  It has two modes, browser mode and node mode.
 *  When in browser mode, it will place a random id to be filled in when the file is successfully collected
 *
 *
 * @param filePath
 * @param options
 * @returns {Handlebars.SafeString|string}
 */
export default function( filePath, options) {

    //console.log(filePath)
    if (typeof window === 'undefined') {
        // Node.js environment
        const fs = require('fs');
        const path = require('path');
        try {
            const fullPath = path.resolve(filePath);
            const svgContent = fs.readFileSync(fullPath, 'utf8');
            return new Handlebars.SafeString(svgContent);
        } catch (error) {
            console.error(`Error reading SVG file: ${filePath}`, error);
            throw error;
        }
    } else {
        // Browser environment
        // Using a placeholder while we fetch the content later
        const id = `svg-${Math.random().toString(36).substr(2, 9)}`;
        fetch(filePath)
            .then(response => {
                if (!response.ok) {
                    throw new Error(`Failed to fetch SVG: ${response.statusText}, ${filePath}`);
                }
                return response.text();
            })
            .then(svgContent => {
                // Insert the SVG content into the DOM after fetching
                const element = document.getElementById(id);
                if (element) {
                    element.innerHTML = svgContent;
                }
            })
            .catch(error => {
                console.error(`Error fetching SVG file: ${filePath}`, error);
            });

        // Return a placeholder div with a unique ID
        return new Handlebars.SafeString(`<div id="${id}">Loading SVG...</div>`);
    }
};
