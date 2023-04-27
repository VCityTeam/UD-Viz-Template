# A template application of the UD-Viz package

This repository offers you a template for create your own application using [UD-Viz](https://github.com/VCityTeam/UD-Viz) framework and its node packages ([browser](https://www.npmjs.com/package/@ud-viz/browser), [shared](https://www.npmjs.com/package/@ud-viz/shared) and [node](https://www.npmjs.com/package/@ud-viz/node)).

The goal of this template is to learn to use and implements UD-Viz components:

- How such features can be configured/extended/embeded.
- How use the html examples of ud-viz into a npm project.
- Illustrate the javascript ecosystem required for building and running it

## Quick starting

> Prerequisites: Install npm, refer to [here](https://github.com/VCityTeam/UD-SV/blob/master/Tools/ToolNpm.md)

### `npm i`

Install the dependencies.

### `npm run debug`

Builds and runs the app in the development mode.
Open [http://localhost:8000/](http://localhost:8000/) to view it in your browser.

When changes are made the app is rebuild.

### `npm run build`

Builds the app in the production mode.

## Deriving your own UD-Viz based application

### Github way

`UD-Viz-Template` is a Github template repository. You can chose this repository as base when you create your repository from Github UI.

### CLI way

- Create a new git repository e.g. `https://github.com/exampleuser/MyApp.git` (does not need to be hosted at github).

- Duplicate this git repository refer to [here](https://docs.github.com/en/repositories/creating-and-managing-repositories/duplicating-a-repository).


## Dev entry point


Reminders:
- Your app is a 3-package application, based on 3-package framework UD-Viz, respectively browser, shared and node. 
- Split-code by interpretation environment:  `browser` package is interpretable by the browser,  `node` package is interpretable by Node.js and  `shared` package is interpretable by both environments.
- The entry point of your application is the main [./package.json](./package.json). See doc [here](https://docs.npmjs.com/cli/v6/configuring-npm/package-json).


To understand globally the functionning we will explain what does the `npm run debug` command step by step.

**Unscrambling the command**

`dotenv -e .env -- cross-env NODE_ENV=development nodemon --trace-warnings --verbose --watch ./packages/shared/src --watch ./packages/browser/src --watch ./packages/browser/style.css --watch ./packages/node/src  --delay 2500ms -e js,css,html ./bin/debug.js`

- `dotenv -e .env` : `dotenv` package will allows to add the content in a [.env](./.env) into the `process.env` of node. See [dotenv](https://www.npmjs.com/package/dotenv), [dotenv-cli](https://www.npmjs.com/package/dotenv-cli), [process.env](https://nodejs.org/dist/latest-v8.x/docs/api/process.html#process_process_env).
- `--` : We add the command finisher --, which tells npm that anything added after this finisher should be added directly to the command. See [npm-tips](https://corgibytes.com/blog/2017/04/18/npm-tips/).
- `cross-env NODE_ENV=development`: `cross-env` package will allows to add variable in command line (*here NODE_ENV*) to `process.env`. See [cross-env](https://www.npmjs.com/package/cross-env), [process.env](https://nodejs.org/dist/latest-v8.x/docs/api/process.html#process_process_env).
- `nodemon [--options] ./bin/debug.js `: It's a package wich is a node tool for development. It restarts interpretation of a javascript file (*here [./bin/debug.js](./bin/debug.js)*) when file changes. See [nodemon](https://www.npmjs.com/package/nodemon).

**dive to [./bin/debug.js](./bin/debug.js)**

- exec and spawn are two functions from [`child-process-promise`](https://www.npmjs.com/package/child-process-promise) which allows to execute node script. See [Promise doc](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise).
- `exec('npm run build-debug --prefix ./packages/browser')`: It calls `npm run build-debug` defined in ./packages/browser/.package.json :
  - `cross-env NODE_ENV=development webpack`: webpack is the tool it permits to create a bundle of your code. The config is defined in `./packages/browser/webpack.config.json`. See doc [here](https://webpack.js.org/concepts/).
  - `const child = spawn('node', ['./bin/host.js', process.env.PORT || 8000], { shell: true, });`: Interprates [./bin/host.js](./bin/host.js) which launchs an express server.



