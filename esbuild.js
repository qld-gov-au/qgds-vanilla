/* global process */
// ESBUILD PROJECT DEPENDENCIES
import * as esbuild from "esbuild";

//Local ESBUILD PLUGINS
import QgdsPluginHandlebarPartialBuilder from "./.esbuild/plugins/qgds-plugin-handlebar-partial-builder.js";
import QgdsPluginHandlebarHelpersRollup from "./.esbuild/plugins/qgds-plugin-handlebar-helpers-rollup.js";
import QgdsPluginSassGlobBuilder from "./.esbuild/plugins/qgds-plugin-sass-glob-builder.js";
import QgdsPluginGlobalJsRollup from "./.esbuild/plugins/qgds-plugin-global-js-rollup.js";
import QGDSrawLoader from "./.esbuild/plugins/qgds-plugin-raw-loader.js";
import QDGScleanFolders from "./.esbuild/plugins/qgds-plugin-clean-output-folders.js";
import QDGSbuildLog from "./.esbuild/plugins/qgds-plugin-build-log.js";
import QDGScopy from "./.esbuild/plugins/qgds-plugin-copy-assets.js";
import { esBuildHandlebarsEmbedSvgPlugin } from  './.esbuild/plugins/handlebarsEmbedSvgPlugin.js'

//Open source ESBUILD PLUGINS
import { sassPlugin } from "esbuild-sass-plugin";
import handlebarsPlugin from "esbuild-plugin-handlebars";

//Command line arguments are available via argv object
import minimist from "minimist";
const argv = minimist(process.argv.slice(2));


// https://esbuild.github.io/getting-started/#build-scripts
const buildConfig = {
    bundle: true,
    minify: true,
    sourcemap: true,
    target: ["es6"],
    logLevel: "info",
    outdir: "./dist/",
    external: ["fs", "path", "handlebars", "../img/*"],

    entryPoints: [
        //This needs to be dynamically generated based off the tokens theme's
        {
            in: "./src/js/main.js",
            out: "./assets/js/main.min",
        },
        {
            in: "./src/css/main-campaign-neon.scss",
            out: "./assets/css/main-campaign-neon.min",
        },
        {
            in: "./src/css/main-campaign-neon-invert.scss",
            out: "./assets/css/main-campaign-neon-invert.min",
        },
        {
            in: "./src/css/main-qld-corporate.scss",
            out: "./assets/css/main-qld-corporate.min",
        },
        {
            in: "./src/css/main-qld-corporate-invert.scss",
            out: "./assets/css/main-qld-corporate-invert.min",
        },
        {
            in: "./src/css/main.scss",
            out: "./assets/css/main.min",
        },
        {
            in: "./src/css/main-invert.scss",
            out: "./assets/css/main-invert.min",
        },
        {
            in: "./src/css/main-qld-high-contrast.scss",
            out: "./assets/css/main-qld-high-contrast.min",
        },
        {
            in: "./src/css/main-qld-high-contrast-invert.scss",
            out: "./assets/css/main-qld-high-contrast-invert.min",
        },
        {
            in: "./src/css/main-qld-maroon.scss",
            out: "./assets/css/main-qld-maroon.min",
        },
        {
            in: "./src/css/main-qld-maroon-invert.scss",
            out: "./assets/css/main-qld-maroon-invert.min",
        }
    ],

    loader: {
        ".html": "text",
        ".hbs": "text",
        ".js": "jsx",
        ".jpg": "file",
        ".png": "file",
        ".gif": "file",
        ".svg": "file",
        ".eot": "file",
        ".woff": "file",
        ".ttf": "file",
    },

    plugins: [
        QgdsPluginHandlebarPartialBuilder(),
        QgdsPluginHandlebarHelpersRollup(),
        esBuildHandlebarsEmbedSvgPlugin(),
        QgdsPluginSassGlobBuilder(),
        QgdsPluginGlobalJsRollup(),
        QDGScopy(),
        QGDSrawLoader(),
        handlebarsPlugin(),
        sassPlugin(),
        QDGSbuildLog(),
    ],
};

const buildDevConfig = {
    ...buildConfig,
    entryPoints: buildConfig.entryPoints.map(entry => ({
        ...entry,
        out: entry.out.replace('.min', '') // Replaces '.min' with an empty string
    })),
    // plugins: buildConfig.plugins.filter((plugin) => {
    //     // Assuming QDGScleanFolders is a named function:
    //     return plugin.name !== "qgds-clean-output-folders";
    // }),
    minify: false,
    sourcemap: true
};

const buildNodeConfig = {
    loader: buildConfig.loader,
    bundle: true,
    minify: false,
    sourcemap: true,
    minifyIdentifiers: false,
    logLevel: buildConfig.logLevel,
    outdir: buildConfig.outdir,
    external: buildConfig.external,
    platform: "node",
    target: ["node20"],
    format: 'esm',
    entryPoints: [
        {
            in: "./src/helpers/handlebars.init.cjs",
            out: "./assets/helpers/handlebars.init.min",
        },
    ],
    plugins: [
        QgdsPluginHandlebarPartialBuilder(),
        QgdsPluginHandlebarHelpersRollup(),
        esBuildHandlebarsEmbedSvgPlugin(),
        QDGScopy(),
        QGDSrawLoader(),
        handlebarsPlugin(),
        QDGSbuildLog(),
    ],
}
async function StartBuild() {
    let ctx = await esbuild.context(buildConfig);
    let ctxDev = await esbuild.context(buildDevConfig);
    let ctxNode = await esbuild.context(buildNodeConfig);

    //clean
    await esbuild.build({plugins: [QDGScleanFolders()]});

    if (argv.watch === true) {
        // "npm run watch"
        await Promise.all([ctx.watch(), ctxDev.watch(), ctxNode.watch(), new Promise(resolve => { /* never resolve */
        })]);
    } else if (argv.clean === true) {
        //done
    } else {
        await Promise.all([ctxNode.rebuild(), ctx.rebuild(), ctxDev.rebuild()]);
        //await Promise.all([ctxNode.rebuild()]);
    }
    await ctx.dispose();
    await ctxDev.dispose();
    await ctxNode.dispose();
}

//Initate the project build...
StartBuild();
