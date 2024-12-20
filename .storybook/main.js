import { mergeConfig } from 'vite';
import customViteConfig from '../vite.config.js'; // Adjust the path as needed

/** @type { import('@storybook/html-vite').StorybookConfig } */
const config = {
    core: {
        disableTelemetry: true,
    },
    stories: [
        //"../src/stories/Introduction.mdx",
        // Include all stories found under the src/components directory ( For example: alert/alert.stories.js )
        // Exlude any stories starting with an underscore ( For example: _exludeme.stories.js )
        "../src/**/!(*_)*.mdx",
        "../src/**/!(*_)*.stories.js",
    ],
    staticDirs: [
        //{ from: '../src/', to: '/' },
        { from: '../dist/assets/css', to: '/assets/css' },
        { from: '../dist/assets/js', to: '/assets/js' },
        { from: '../dist/assets/helpers', to: '/assets/helpers' },
        { from: '../src/img', to: '/assets/img' },
    ], //Bring dist in statically instead of having it minified
    addons: [//Storybook addons
    //https://storybook.js.org/addons/
        "@storybook/addon-a11y",
        "@storybook/addon-themes",
        "@storybook/addon-essentials",
        "@storybook/addon-interactions",
        {
            name: "@storybook/addon-storysource",
            options: {
                loaderOptions: {
                    injectStoryParameters: true,
                },
            },
        },
        "@storybook/addon-links",
        "@chromatic-com/storybook",
        "@storybook/addon-designs"
    ],

    framework: {
        //Build the storybook with html-vite rendered - faster than webpack
        //https://www.npmjs.com/package/@storybook/html-vite
        name: "@storybook/html-vite",
        options: {},
    },

    //Autodocs for each component
    //https://storybook.js.org/docs/writing-docs/autodocs
    docs: {
        defaultName: 'Overview'
    },



    // https://storybook.js.org/docs/api/main-config-vite-final
    // Use the Vite configuration from the main project (yes this is a esbuild project but storybook uses vite)
    async viteFinal(config) {
        // Merge custom Vite configuration
        //console.log(JSON.stringify(mergeConfig(config, customViteConfig.default)));
        return mergeConfig(config, customViteConfig.default);
    },
};

export default config;
