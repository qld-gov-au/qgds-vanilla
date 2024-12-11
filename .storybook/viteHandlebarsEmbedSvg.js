export default function embedSvgPlugin() {
    return {
        name: 'vite-embed-svg',
        enforce: 'pre', // Ensure this plugin runs before other transforms
        transform(code, id) {
            if (!id.endsWith('.hbs')) {
                return null; // Only process .hbs files
            }
            console.log(id);

            // Regex pattern to match {{embedSvg "file.svg"}}
            const svgEmbedPattern = /{{\s*embedSvg\s*"([^"]+)"\s*}}/g;

            // Replace {{embedSvg "file.svg"}} with the content of the SVG
            const transformedCode = code.replace(svgEmbedPattern, (match, filePath) => {
                try {
                    const svgPath = path.resolve(path.dirname(id), filePath);
                    const svgContent = fs.readFileSync(svgPath, 'utf8');
                    return svgContent;
                } catch (error) {
                    console.error(`Error embedding SVG for ${filePath}:`, error);
                    return match; // Leave the original tag if there's an error
                }
            });

            // Return the transformed code
            return {
                code: transformedCode,
                map: null, // Source map is not needed for this transformation
            };
        },
    };
}
