# How to create your ud-viz based application

<!-- TOC -->

- [What you will get for the impatient](#what-you-will-get-for-the-impatient)
- [Skills recommended for building your demo](#skills-recommended-for-building-your-demo)
- [Prerequisites](#prerequisites)
- [Basic npm project configuration](#basic-npm-project-configuration)
- [Start providing the application JS code](#start-providing-the-application-js-code)
- [Create the code bundle by providing a webpack.config.js](#create-the-code-bundle-by-providing-a-webpackconfigjs)
- [Import the application bundle into the index.html and service the app](#import-the-application-bundle-into-the-indexhtml-and-service-the-app)
- [Define your application CSS style](#define-your-application-css-style)
- [Serve your application and access it](#serve-your-application-and-access-it)
- [Further UD-Viz material](#further-ud-viz-material)

<!-- /TOC -->

## What you will get (for the impatient)

This repository provides the resulting files that this tutorial helps you
to build step by step. You can examine those files and also run the resulting
application with the following commands

```bash
git clone https://github.com/VCityTeam/UD-Viz-template.git
npm install 
npx webpack --config webpack.config.js
python3 -m http.server
firefox http://localhost:8000
```

## Skills recommended for building your demo

In order to go through this tutorial you will need to be acquainted with:
- `git` (repository, branches, fork): refer to [this git gateway](https://github.com/VCityTeam/UD-SV/blob/master/Tools/ToolGit.md)
- the basics of JavaScript programming. Useful links : [MDN docs](https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/JavaScript_basics) (browser), and [W3School tutorial](https://www.w3schools.com/nodejs/nodejs_get_started.asp) (node.js).
- Make a quick survey of what [the UD-Viz framework is about](https://github.com/VCityTeam/UD-Viz).

## Prerequisites

You will need to install the following tools
- npm (refer to [here for some quick guidelines](https://github.com/VCityTeam/UD-SV/blob/master/Tools/ToolNpm.md))

## Basic (npm) project configuration

First setup your npm **environnement**, that is a set of configuration files
assembled together to form/define your application

- Create a new directory folder (for example named `my-demo`), in order to hold 
  all the files constituting your new web application:
  ```bash 
  mkdir my-demo
  ``` 

- Connect to that directory
  ```bash
  cd my-demo
  ```
  
- Initialize your npm project with the help of the 
  [`npm init`](https://docs.npmjs.com/cli/v6/commands/npm-init/)
  scaffolding command. You should obtain a default `package.json` file:
  ```bash
  npm init -y
  ```
  
- Install (still with the help of the 
  ['npm' command](https://docs.npmjs.com/cli/v6/commands/)) the 
  [webpack](https://www.npmjs.com/package/webpack) and
  [webpack-cli](https://www.npmjs.com/package/webpack-cli)
  utilities. The `--save-dev` flags will update your newly created
  `package.json` with a `devDependencies` entry. This goes
  ```bash
  npm install webpack webpack-cli --save-dev
  ``` 

- Edit the `package.json` file and
  * remove the 
    ["main"](https://docs.npmjs.com/cli/v10/configuring-npm/package-json#main)
    entry
  * instead add a 
    ["private": true](https://docs.npmjs.com/cli/v10/configuring-npm/package-json#private)
    entry

- Create an `index.html` (blank template) file with the following content
  ```html 
  <!DOCTYPE html>
  <html>
  <head>
  <meta charset="UTF-8">
  <title>Title of the document</title>
  </head>

  <body>
  Content of the document......
  </body>

  </html>
  ```


## Start providing the application JS code 

- Create a `src` sub-directory as placeholder for your JavaScript code.
  ```bash
  mkdir my-demo/src
  ``` 

- Provide JS code to the `src` sub-directory. For this you can start 
  constructing your own code by taking some inspiration out of the 
  [ud-viz examples](https://github.com/VCityTeam/UD-Viz/tree/master/examples)
  provided with the [`ud-viz` library](https://github.com/VCityTeam/UD-Viz).

  In the following we shall extract the bare content out of the 
  [ud-viz/examples/point_cloud_visualizer.html](https://github.com/VCityTeam/UD-Viz/blob/master/examples/point_cloud_visualizer.html).

  You should first create an empty `index.js` file within the `src` 
  sub-directory. Then copy the content of the `<script type="text/javascript">`
  section out of the
  [ud-viz/examples/point_cloud_visualizer.html file ](https://github.com/VCityTeam/UD-Viz/blob/master/examples/point_cloud_visualizer.html) and paste it to the newly
  created index.js` file.

- Modify `index.js` in the following manner:
	- Suppress the `udviz` variable: this is because the `udviz` variable is only
    useful when ud-viz is imported as a bundle in the context of the library
    example. You then need to further edit the `index.js` file in order to 
    remove all the `udviz.` prefixes occurrences. 
    For example the initial `udviz.loadMultipleJSON(...)` should simply become 
    `loadMultipleJSON(...)` and `udviz.itowns.Extent(...)` should become 
    `itowns.Extent(...)`.
	- Because many function or classes were previously imported by the ud-viz 
    bundle, you must now import those function or classes through the standard 
    ES6 Module. You should do this for all the following function classes:
		- loadMultipleJSON
		- proj4 
		- PointCloudVisualizer
		- LayerChoice
		- Bookmark
		- ColoLayer, Extent, WMSSource, ElevationLayer, STRATEGY_DICHOTOMY

  You should obtain an [`index.js` looking like this](./my-demo/src/index.js).

- A couple remarks about the content of the resulting `index.js`:

  * [`import xxx from 'xxx'`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import) is used to import modules (=code, assets ...). The notion of module is very important in Javascript I advise you to read [the MDN doc guide](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules).

  * `document` is a variable that is part of your browser's web API, it allows you to add / retrieve / delete / create ([html elements](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement)) in your [DOM](https://developer.mozilla.org/en-US/docs/Web/API/Document_object_model/Using_the_Document_Object_Model#what_is_a_dom_tree).
  To see the contents of this variable go to your browser's console on the web page of your choice and type `document`. 

  * The `document.body` contains the [HTML body element](https://developer.mozilla.org/en-US/docs/Web/API/HTMLBodyElement) of your DOM. It corresponds to the `<body>` tag of the [index.html](./packages/browser/index.html).
  The function takes as parameters:

  * FIXME LIGNE 16 a config in the form of a [javascript object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Object_initializer)

  * FIXEME LIGNE 57 `app.itownsView`, an `iTowns.View` provided by iTowns, creates the html element that contains the 3D scene (camera, renderer...). See [itowns doc](http://www.itowns-project.org/itowns/docs/#api/View/PlanarView).   
  
  * FIXME LIGNE 22 an `itowns.Extent`. The geographical boundaries. See [itowns doc](http://www.itowns-project.org/itowns/docs/#api/Geographic/Extent). 

  * You may notice that you don't have to create the `PlanarView` and `Extent` since they are already built into your `app` instance FIXME LIGNE 32 of the `PointCloudVisualizer` class. You might want to check out the source of `PointCloudVisualizer` in order to get a better understanding of what is implicitly provided under the hood.

- Retrieve all the configuration files loaded by the call to 
  `loadMultipleJSON(...)`, that are located in the 
  [`examples/assets/config/`](https://github.com/VCityTeam/UD-Viz/tree/master/examples/assets/config)
  subdirectory and place their respective copy in `my-demo/assets/`.
  This boils down to the following commands:
  ```bash
  git clone https://github.com/VCityTeam/UD-Viz.git
  export UDVIZ_SRC=`pwd`/UD-Viz
  mkdir -p my-demo/assets/config/layer
  cd my-demo/assets
  cp $(UDVIZ_SRC)/examples/assets/config/extents.json .
  cp $(UDVIZ_SRC)/examples/assets/config/crs.json .
  cp $(UDVIZ_SRC)/examples/assets/config/layer/elevation.json config/layer/
  cp $(UDVIZ_SRC)/examples/assets/config/layer/base_maps.json config/layer/
  cp $(UDVIZ_SRC)/examples/assets/config/layer/3DTiles_point_cloud.json config/layer/
  ```

- Don't forget to `npm install --save` your npm package dependencies. For 
  example if you considered the 
  [ud-viz/examples/point_cloud_visualizer.html](https://github.com/VCityTeam/UD-Viz/blob/master/examples/point_cloud_visualizer.html)
  as base example (that is 
  [deployed here](https://ud-viz.vcityliris.data.alpha.grandlyon.com/examples/point_cloud_visualizer.html)) then you will need to
  ```bash
  npm install @ud-viz/point_cloud_visualizer
  npm install @ud-viz/widget_layer_choice
  npm install @ud-viz/widget_bookmark
  ```
  The above instructions should add new entries in the `dependencies` section 
  of your `package.json.`

  Troubleshooting the above dependencies installation: when the installation 
  of the dependencies do error, you might consider 
  - clearing your npm cache with `npm cache clean --force`,
  - removing any previous package installations with `rm -fr node_modules`
  - removing the pinned package versions with `rm package-lock.json`.


## Create the code bundle by providing a `webpack.config.js`

- Create first `webpack.config.js` with the following basic content:

  ```js
  const path = require('path');

  module.exports = {
    entry: './src/index.js',
    output: {
      filename: 'bundle.js',
      path: path.resolve(__dirname, 'dist'),
    },
  };
  ```

- Because of an erroneous package resolution (refer to 
  [this note](https://webpack.js.org/configuration/resolve/) together with
  [that note](https://developer.mozilla.org/fr/docs/Glossary/Polyfill)),
  manually install the `buffer` package 
  ```bash
  npm install buffer
  ```

- As explained below, the point-cloud-visualizer example code imports a
  [(CSS) style](https://en.wikipedia.org/wiki/CSS). For webpack to be able to
  deal with that style 
  - do install the following loaders
    ```bash
    npm install style-loader css-loader --save-dev
    ```
  - Inform `webpack.config.js` of the existence of those loaders by adding
    a `module` entry
    ```js
    [...]
    module.exports = {
      [...]
      output: { [...] },
      module: {
        rules: [
          {
            test: /\.css/,
            use: ['style-loader', 'css-loader'],
          },
        ],
      },
    };
    ```

- Eventually create the code bundle with the command
 ```bash
 npx webpack --config webpack.config.js
 ```
 The resulting bundle should now exist in the form of the 
 `my-demo/dist/bundle.js` file.


## Import the application bundle into the `index.html` and service the app
Create a `<script>` section in your `index.html` file in order to allow for
the bundle importation:
```html
[...]
</head>
<script src='./dist/bundle.js'></script>
[...]
<body>
[...]
```

## Define your application (CSS) style

You now need to provide a [(CSS) style](https://en.wikipedia.org/wiki/CSS) to
your application.

For this you can 
- copy the style related entries of the original example 
  [`ud-viz/examples/point_cloud_visualizer.html`](https://github.com/VCityTeam/UD-Viz/blob/master/examples/point_cloud_visualizer.html), that is the lines
  ```html
  [...]
  <head>
    [...]
    <link rel="stylesheet" href="./assets/css/examples.css" />
    <link rel="stylesheet" href="./assets/css/point_cloud_visualizer.css" />
    <link rel="stylesheet" href="./assets/css/widget_layer_choice.css" />
    <link rel="stylesheet" href="./assets/css/widget_bookmark.css" />
    <link rel="stylesheet" href="./assets/css/loading_screen.css" />
    [...]
  </head>
  ```
  in order to paste them into the `<head>` section of newly created `index.html`
  file. 
- you then need to copy the corresponding `css` files out of 
  [examples/assets/css](https://github.com/VCityTeam/UD-Viz/tree/master/examples/assets/css)
  of the  ud-viz examples, which can be done with the following commands
  ```bash
  cd my-demo
  cp $(UDVIZ_SRC)/examples/assets/css/examples.css assets/css/
  cp $(UDVIZ_SRC)/examples/assets/css/point_cloud_visualizer.css assets/css/
  cp $(UDVIZ_SRC)/examples/assets/css/widget_layer_choice.css assets/css/
  cp $(UDVIZ_SRC)/examples/assets/css/widget_bookmark.css assets/css/
  cp $(UDVIZ_SRC)/examples/assets/css/loading_screen.css assets/css/
  ```

## Serve your application and access it

Create an http server that will serve the `my-demo` which be done e.g. with
python3 through
```bash
cd my-demo
python3 -m http.server
```

You can now access your web application by web-browsing the URL returned by the
above command (`http://localhost:8000`).

## Further UD-Viz material

In order to quickly learn more about of what you can achieve with UD-Viz,
you might wish to ead the different [examples](https://github.com/VCityTeam/UD-Viz/tree/master/examples) together with [the developers documentation](https://github.com/VCityTeam/UD-Viz/blob/master/docs/static/Developers.md) and try to transpose tools, widgets, code snippet to your application.
