
## Required skills

In order to go through this tutorial you will need to be aquainted with:
- `git` (repository, branches, fork): refer to [this git gateway](https://github.com/VCityTeam/UD-SV/blob/master/Tools/ToolGit.md)
- the basics of JavaScript programming. Useful links : [MDN docs](https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/JavaScript_basics) (browser), and [W3School tutorial](https://www.w3schools.com/nodejs/nodejs_get_started.asp) (node.js). FIXME: porter ce contenu dans la [doc standard](https://github.com/VCityTeam/UD-SV/blob/master/Tools/ToolJavaScript.md).
- Make a quick survey of what [the UD-Viz framwork is about](https://github.com/VCityTeam/UD-Viz).

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


## Unscrambling the command

> dotenv -e .env -- cross-env NODE_ENV=development nodemon --trace-warnings --verbose --watch ./packages/shared/src --watch ./packages/browser/src --watch ./packages/browser/style.css --watch ./packages/node/src  --delay 2500ms -e js,css,html ./bin/debug.js

- **`dotenv -e .env`**: *dotenv* package will allows to add the content in a [.env](./.env) into the *process.env* of node. See [dotenv](https://www.npmjs.com/package/dotenv), [dotenv-cli](https://www.npmjs.com/package/dotenv-cli), [process.env](https://nodejs.org/dist/latest-v8.x/docs/api/process.html#process_process_env).
- **`--`**: We add the command finisher --, which tells npm that anything added after this finisher should be added directly to the command. See [npm-tips](https://corgibytes.com/blog/2017/04/18/npm-tips/).
- **`cross-env NODE_ENV=development`**: *cross-env* package will allows to add variable in command line (*here NODE_ENV*) to *process.env*. See [cross-env](https://www.npmjs.com/package/cross-env), [process.env](https://nodejs.org/dist/latest-v8.x/docs/api/process.html#process_process_env).
- **`nodemon [--options] ./bin/debug.js `**: It's a package wich is a node tool for development. It restarts interpretation of a javascript file (*here [./bin/debug.js](./bin/debug.js)*) when file changes. See [nodemon](https://www.npmjs.com/package/nodemon).

**dive to [./bin/debug.js](./bin/debug.js)**

- exec and spawn are two functions from [*child-process-promise*](https://www.npmjs.com/package/child-process-promise) which allows to execute node script. See [Promise doc](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise).
- **`exec('npm run build-debug --prefix ./packages/browser')`**: It calls *npm run build-debug* defined in ./packages/browser/.package.json :
  - **`cross-env NODE_ENV=development webpack`**: webpack is the tool it permits to create a bundle of your code. The config is defined in *./packages/browser/webpack.config.json*. See doc [here](https://webpack.js.org/concepts/).
  - **`const child = spawn('node', ['./bin/host.js', process.env.PORT || 8000], { shell: true, });`**: Interprates [./bin/host.js](./bin/host.js) which launchs an express server. See [express](https://www.npmjs.com/package/express)

`DEBUG` is a global variable that is set during the build of your application, it gives information about the [`mode`](https://webpack.js.org/configuration/mode/) build that was used to create the bundle.
> In DEBUG mode, a `<script>` tag is added to your DOM to allow automatic refreshes of your web page when changes are detected.  

#################################################################################


