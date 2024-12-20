import { viteHandlebarsEmbedSvgPlugin } from "./.esbuild/plugins/handlebarsEmbedSvgPlugin.js";

/** @type {import('vite').UserConfig} */
export default {
    css: {
        preprocessorOptions: {
            scss: {
                api: "modern-compiler",
            },
            sass: {
                silenceDeprecations: ["imports"],
            },
        },
    },
    plugins: [
        {
            name: "html-transform",
            transform(src, id) {
                if (
                    id.endsWith(".mustache") ||
                    id.endsWith(".html") ||
                    id.endsWith(".hbs")
                ) {
                    // Transform your HTML files here (src is the file content as a string)
                    return src;
                }
            },
        },
        viteHandlebarsEmbedSvgPlugin(),
    ],
};
