# QGDS Vanilla - Prototype only

Developed using the QLD Health Design System (refractored).

# WORK IN PROGRESS

## This is an alpha version and is not production ready

If you are using assets from this Repo, please send an email to designandcapability@chde.qld.gov.au so we can add you to our change management communications list

An attached MIT (basic) licence with “THIS REPOSITORY (SOFTWARE) IS PROVIDED AS IS WITHOUT WARRANTY”

This boilerplate is the frontend starting point for design cutups and front end component development for the Queensland Design System.

## Table of Contents
#### [Getting Started](#getting-started-1)
- [Inclusions](#inclusions)
- [Requirements](#requirements)
- [Local Development](#local-development)
- [Building for production](#building-for-production)

#### [Component Development](#component-development-1)
- [Creating a new component](#creating-a-new-component)
- [Component data](#component-data-manifestjson)
- [Handlebars template](#handlebars-template-componenthbs)
- [Styling a component](#styling-a-component-componentscss)
- [Component JavaScript](#component-javascript-globaljs)
- [Updating / Previewing a component](#updating--previewing-a-component)
- [Build / Commit / Push](#build--commit--push)
- [Importing into Matrix](#importing-into-matrix)

#### [General Boilerplate Features](#general-boilerplate-features-1)
- [Working in HTML Files](#working-in-html-files)
- [Working in SCSS Files](#working-in-scss-files)
- [Working in JS Files](#working-in-js-files)

#### [Contributing](#contributing)
#### [Copyright and Warrannty](#copyright-and-warrannty)

## Getting Started

### Inclusions
When you first clone down the Design System, you automatically get the following:
- Sass compilation + Post CSS autoprefixer
- Templated components with HandlebarsJS (USE AT YOUR OWN RISK -- **SUBJECT TO CHANGE**)
- ESLint
- Hot-reload HTML, CSS and JS

### Requirements
- Node: v20.x
- NPM: 10.8.2

### Local Development

First, install all the required packages:

```
npm install
```

To preview the Design System on your local machine, run the following command:

```
npm run serve
```

This will serve the website into memory in your browser, and will also automatically reload the page after any code changes are saved.

### Building for production

There are two commands you can run when compiling your code for production environments:

```
npm run build
```
```
npm run build-min
```
Both of these commands will run through the configurations set up in `webpack.prod.js` to compile all of your HTML, CSS, and JavaScript for use on a production system.

Instead of just serving the site into memory in your browser with `npm run serve`, this will actually build your files into the /dist directory.

## Component development
### Creating a new component
All existing components are located in src/components, and you can find the base component template in src/components/_template. Run the command `npm run add-component` and follow the prompts to create a new component from this template.

**Please note:** If you've still got `npm run serve` running in another console window, you'll need to restart that process for Webpack to recognise it.

Each new component will include the following files, which will require updating:
* js/manifest.json - Define the data structure for your component (see below)
* html/component.hbs - Define the structure of your component using HandlebarsJS templating
* css/component.scss - Style your component using SASS
* js/global.js - Frontend JavaScript for your component (eg. toggling of accordions)

At the same time, the script will also automatically create a corresponding component HTML page at src/html/component-\[component-name\], which will allow you to preview the component via `npm run serve`.

For more details on each of these, see the sections below.



### Handlebars template (component.hbs)
Use this file to define the overall template structure of your component using [HandlebarsJS](https://handlebarsjs.com/guide/).

Every component will have access to the **data** object defined in your *manifest.json* file, as well as global data values from **site** and **current** (ie. the current page). See examples of these at *src/data/site.json* and *src/data/current.json* respectively.

Here is an example from the existing **Accordion** component:

```
{{#ifCond globals.current.data.metadata.pageType.value '==' 'landing'}}
<section class="qld__body">
    <div class="container-fluid">
{{/ifCond}}


{{#if data.heading.value}}
<h2>{{data.heading.value}}</h2>
{{/if}}

{{#if data.intro.value}}
{{{data.intro.value}}}
{{/if}}


<ul class="qld__accordion-group">
    {{#each data}}
        {{#ifCond this.type '==' 'metadata_field_wysiwyg'}}
            {{#ifCond @key '!=' 'intro'}}
                {{#ifCond this.value '!=' ''}}
                <li>
                    <section class="qld__accordion">
                        <button class="qld__accordion__title js-qld__accordion qld__accordion--closed" aria-controls="accordion-group-{{../containerId}}-{{this.fieldid}}" aria-expanded="false" >
                            {{#getTitle ../data @key}}{{/getTitle}}
                        </button>

                        <div class="qld__accordion__body qld__accordion--closed" id="accordion-group-{{../containerId}}-{{this.fieldid}}">
                            <div class="qld__accordion__body-wrapper">
                                {{{this.value}}}
                            </div>
                        </div>
                    </section>
                </li>
                {{/ifCond}}
           {{/ifCond}}
       {{/ifCond}}
    {{/each}}
</ul>

{{#ifCond globals.current.data.metadata.pageType.value '==' 'landing'}}
</div>
</section>
{{/ifCond}}

```

This example contains instances of both the **data** object, as well as the **globals** object. For example, we access the *pageType* value from the current page to determine whether to add some additional wrapping markup.

There are also some examples of custom [Handlebars Helpers](https://handlebarsjs.com/guide/#custom-helpers) being used (Eg. *ifCond* and *getTitle*). Each helper is defined in its own JS file under *src/helpers/Handlebars*. You can add your own helpers by creating additional JS files (one per helper) in this directory, and following the same code structure.

For example:

```
module.exports = function (params) {
    // Helper function goes here
};


```

### Styling a component (component.scss)
Use SASS to style your component, and follow the BEM methodology when naming your classes (Eg. `.qld__accordion--light`). To maintain consistency, look at existing components if you are unsure.

Also take care to follow a 'mobile-first' approach with your SCSS code, where styling at larger breakpoints (see *src/styles/imports/variables.scss* for breakpoint definitions) can be implemented with one of the following mixins:

```
// >sm breakpoint
@include QH-media( sm ) {}

// >md breakpoint
@include QH-media( md ) {}

// >lg breakpoint
@include QH-media( lg ) {}

// >xl breakpoint
@include QH-media( xl ) {}

// >xxl breakpoint
@include QH-media( xxl ) {}

```

These should be implemented inline for each class separately (see *banner* component for a good example)

### Component JavaScript (global.js)
This is where you should add any client side JavaScript (eg. toggling of Accordions). Ensure that all functions are documented in [Jsdoc](https://devhints.io/jsdoc) format.

### Updating / Previewing a component
To test any updates to a component, you can view it locally using `npm run serve`. A corresponding component page will be automatically created at src/html/component-\[component-name\], so that you can easily preview your component, and test the output with different input data.

### Build / Commit / Push
Once you are ready to push up any local changes to a component, you should run the `npm run build` script before you commit. This generates the compiled Handlebars template, as well as an import.xml file that can be used to automatically create all of the assets required in Matrix for your component.



## Advanced Features
### Figma colour sync

The Figma script pulls in all colour variables from the Figma file via the API which can be at '.figma.js'.

By default the script points the design system file which can be updated to pull in new designs colour matrix.

To pull in a new colour matrix you will need to update line 6 with the new path.
```
/qKsxl3ogIlBp7dafgxXuCA
```
The new path can be found in the url of the figma file, simply copy the figma file id '/file/<figma-file-id>'.
e.g
```
https://www.figma.com/file/**qKsxl3ogIlBp7dafgxXuCA**/QLDH-DDS?node-id=5990%3A97450&viewport=241%2C48%2C0.5
```
Once the path has been updated and save you can now run the script with:
```
npm run get-figma
```
This will hit the figma API via a get request, process the values and save the new SASS varibles in:
```
/src/styles/imports/figma.scss
```
The figma variables can now be used by running either of the local or production scripts.

## General Boilerplate Features
This section contains some general tips for writing code using this boilerplate
### Working in HTML files
#### Including images
- Your files live in:
    - src/files/my-awesome-file.png
- And you're wanting to include an image in:
    - src/modules/header/html/index.html
- Use either reference:
    - Relative path: `<img src="../../../files/my-awesome-file.png" alt="My awesome file" >`
    - Absolute path: `<img src="~src/files/my-awesome-file.png" alt="My awesome file" >`

#### Including HTML modules
- Your awesome menu lives in:
    - src/modules/header-menu/html/index.html
- And you want to include it in:
    - src/modules/header/html/index.html
- Use either reference:
    - Relative path: `${require('../../header-menu/html/index.html')}`
    - Absolute path: `${require('src/header-menu/html/index.html')}`

### Working in SCSS files
#### Including fonts
- Your fonts live in:
    - src/styles/imports/fonts/my-awesome-font.woff
- And you want to include it in your main CSS:
    - src/styles/global.scss
- Use either reference:
    - Relative path: `url('./imports/fonts/my-awesome-font.woff') format('woff')`
    - Absolute path: `url('~src/imports/fonts/my-awesome-font.woff') format('woff')`

#### Including images
- Your files live in:
    - src/files/icon.png
- And you're wanting to include an image in:
    - src/modules/header/css/global.scss
- Use either reference:
    - Relative path: `background-image: url('../files/icon.png')`;
    - Absolute path: `background-image: url('~src/files/icon.png')`;


### Working in JS files
#### Including images
- Your files live in:
    - src/files/icon.png
- And you're wanting to include an image in:
    - src/modules/header/js/global.js
- Use either reference:
    - Relative path: `const icon = require('../../../files/icon.png');`
    - Absolute path: `const icon = require('src/files/icon.png');`

#### Including JSON
You may want to reference an external JSON file that does not need to be a part of the webpack build process. For instance, mock data returned from funnelback autocomplete. The /externals directory allows you to pop in files to ensure that they will be included in the /dist directory

- Your file lives in:
    - `src/externals/data.json`
- You can reference it by its relative path ie.
    - `fetch('./externals/data.json').then(function(response){...do stuff})`
- Or its absolute path ie.
    - `fetch('~src/externals/data.json').then(function(response){...do stuff})`
- File will be moved into the dist directory `dist/externals/data.json`


#### Maven
- To build and test all: ```mvn install```
- To build js docs ```mvn com.github.eirslett:frontend-maven-plugin:npm@jsdoc```
- To run webpack serve ```mvn com.github.eirslett:frontend-maven-plugin:npm@serve```

### Contributing

#### Pull Request Guidelines
Thank you for contributing to our project! To ensure a smooth and efficient review process, please follow these guidelines when submitting a pull request.

##### Pull Request Template
Before creating a pull request, please make sure to:

- Fork the repository and create a branch for your changes.
- Ensure your code follows our coding standards and guidelines.
- Update the documentation if your changes affect it.
- Write tests for your changes if applicable.

##### Labels
We use labels to categorize pull requests based on the type of change. Please add one of the following labels to your pull request:

- Label: major
- - Use this label for significant changes that require attention.
- - Examples: Breaking changes, major feature enhancements.
- - Expect a thorough review and discussion before merging.

- Label: minor
- - Apply this label for smaller, backward-compatible changes.
- - Examples: New features, improvements.
- - Generally, a quicker review process compared to major changes.

- Label: patch
- - Assign this label for minor bug fixes and patches.
- - Examples: Bug fixes, small improvements.
- - Typically fast-tracked for a swift review and merging.

### Submitting the Pull Request
When your changes are ready, submit the pull request with a clear and informative title. Provide a brief description of the changes and reference any relevant issues.

### Communication
Feel free to reach out if you have questions or need assistance during the review process. We appreciate your contributions and look forward to collaborating with you!


### Copyright and Warrannt
Copyright (c) The State of Queensland 2023 (Queensland Health)

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THIS REPOSITORY SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
