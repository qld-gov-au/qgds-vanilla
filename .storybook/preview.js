
//load global styles and js
import "../src/js/main.js";
import "../src/css/main-light.scss";

import { themes } from '@storybook/theming';
import {withThemeByClassName, DecoratorHelpers} from '@storybook/addon-themes';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';

// import { withQGDSTheme } from './theme.decorator';

const themeData = {
    themes: {
        "None": 'qld__body',
        "Light": 'qld__body qld__body--light',
        "Light alternative": 'qld__body qld__body--alt',
        "Dark": 'qld__body qld__body--dark',
        "Dark alternative": 'qld__body qld__body--dark-alt',
        "Disabled": '',
    },
    defaultTheme: 'None',
    parentSelector: '.qld__body' //'body'  // Target the div with class "qld__body"
};

/** @type { import('@storybook/html-vite').Preview } */
const preview = {
    parameters: {
        //actions: { argTypesRegex: "^on[A-Z].*" },
        chromatic: {
            //🔶 Test each story for ArticleCard in two modes
            modes: {
                // Light: allModes["Light"],
                // "Light alternative": allModes["Light alternative"],
                // Dark: allModes["Dark"],
                // "Dark alternative": allModes["Dark alternative"],
                //mobile: allModes["mobile"],
                //desktop: allModes["desktop"],
                //"1200px": {viewport: 1200}, //original non-modes based baseline
            },
        },
        layout: 'fullscreen',
        viewport: {
            viewports: { //QLD-media Breakpoints
                small: {name: "Small", styles: {width: "400px", height: "800px"}},
                medium: {name: "Medium", styles: {width: "700px", height: "800px"}},
                large: {name: "Large", styles: {width: "992px", height: "800px"}},
                xlarge: {name: "Extra Large", styles: {width: "1312px", height: "1000px"}},
                xxlarge: {name: "Extra Extra Large", styles: {width: "1599px", height: "1000px"}},
                navbreakpoint: {name: "Nave Breakpoint", styles: {width: "992px", height: "800px"}},
                ...INITIAL_VIEWPORTS
            }
        },
        hideNoControlsWarning: true,
        expanded: true,
        controls: {
            expanded: true,
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/i,
            },
        },
        html: {
            highlighter: {
                wrapLines: false,
            },
        },
        backgrounds: { disable: true },
        docs: {
            toc: {
                headingSelector: 'h1, h2, h3',
                theme: themes.light,
            }, // 👈 Enables the table of contents,
            source: {
                language: "html",
            },
        },
        options: {
            storySort: {
                method: 'alphabetical',
            }
        },
        a11y: {
            // Optional configuration for the a11y addon
            config: {},
            options: {
                checks: { 'color-contrast': { options: { noScroll: true } } },
                restoreScroll: true,
            },
        },
    },

    decorators: [
        (Story, context) => {
            //This is for theme injection so that viewport changes shows correctly, withThemeByClassName is not retriggered if viewport is altered (re-rendered)
            const currentTheme = DecoratorHelpers.pluckThemeFromContext(context)
            const { themeOverride } = DecoratorHelpers.useThemeParameters();
            const selectedThemeName = themeOverride || currentTheme || themeData.defaultTheme ;
            const classes = themeData.themes[selectedThemeName];
            return `
<div class="${classes} qld__grid" ><!-- end theme override -->
${Story()}
</div><!-- theme override close div -->
`;
        },
        withThemeByClassName(themeData), //For theme dynamic loading
    ],

    tags: ["autodocs"]
};

export default preview;
