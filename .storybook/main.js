/** @type { import('@storybook/html-vite').StorybookConfig } */

/** @type { import('@storybook/html-webpack5').StorybookConfig } */

// path
const path = require('path');

const config = {
    stories: [
        "../src/stories/Introduction.mdx",
        // Include all stories found under the src/components directory ( For example: alert/alert.stories.js )
        // Exlude any stories starting with an underscore ( For example: _exludeme.stories.js )
        "../src/**/!(*_)*.mdx",
        "../src/**/!(*_)*.stories.js",
    ],
    staticDirs: [
        '../src/assets/',
        '../dist/'
    ],
    addons: [//Storybook addons
    //https://storybook.js.org/addons/
    "@storybook/addon-a11y",
        "@storybook/preset-scss",
        "@storybook/addon-links",
        "@storybook/addon-themes",
        "@storybook/addon-essentials",
        "@storybook/addon-interactions",
        "@storybook/addon-links",
        "@chromatic-com/storybook"],

    framework: {
        //Build the storybook with html-vite rendered - faster than webpack
        //https://www.npmjs.com/package/@storybook/html-vite
        name: "@storybook/html-webpack5",
        options: {
            builder: {
                useSWC: true,
            },
        }
    },


    //Autodocs for each component
    //https://storybook.js.org/docs/writing-docs/autodocs
    docs: {
        autodocs: "tag",
        // defaultName: 'Overview'
    },


    //Each component's JS module, for example Alert.js, imports a HTML string to use for it's template.
    //We add a plugin to handle these .hbs extensions. (Or .mustache, .html etc)
    //https://storybook.js.org/docs/api/main-config-vite-final

  //   viteFinal: async (config, {configType}) => {
  //       config.root = './dist'
  //       // config.plugins.push({
  //       //     name: "html-transform",
  //       //     transform(src, id) {
  //       //         if (id.endsWith(".mustache") || id.endsWith(".html") || id.endsWith(".hbs")) {
  //       //             // Transform your HTML files here (src is the file content as a string)
  //       //             return src;
  //       //         }
  //       //     },
  //       // });
  // },
  webpackFinal: async (config, { configType }) => {
    // Add custom webpack configuration here
    config.module.rules.push({
      test: /\.custom\.js$/, // Example custom rule
      use: ['babel-loader'], // Example custom loader
    });
    // Add Handlebars loader rule
    config.module.rules.push({
      test: /\.hbs$/,
      loader: 'handlebars-loader',
      options: {
        helperDirs: path.resolve(__dirname, '../src/helpers/Handlebars'),
        knownHelpers: ['ifCond', 'ifAny', 'renderSpecialChar', 'itemAt'],
        knownHelpersOnly: false,
      },
    });
    // SCSS rule
    config.module.rules.push({
      test: /\.scss$/,
      use: ['style-loader', 'postcss-loader', 'css-loader', 'sass-loader', 'import-glob-loader'],
      include: path.resolve(__dirname, '../.migrate/styles'),
    });

    // Return the customized webpack config
    return config;
  },
};
export default config;
