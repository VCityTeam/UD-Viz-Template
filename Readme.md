# UD-Viz-Template : Your base for your UD-Viz demo

Hello !
Welcome in `UD-Viz-Template` repository. It's a repository which will offers a base for create your own demo using [UD-Viz](https://github.com/VCityTeam/UD-Viz) framework and notably its three packages `npm` : [`@ud-viz/browser`](https://www.npmjs.com/package/@ud-viz/browser), [`@ud-viz/shared`](https://www.npmjs.com/package/@ud-viz/shared), [`@ud-viz/node`](https://www.npmjs.com/package/@ud-viz/node).

  
## First of all

Learn:
- Knows the basics of `git` (repository, branches, fork). Useful link [W3School tutorial](https://www.w3schools.com/git/default.asp)
- Knows the basics of JavaScript programming. Useful links : [MDN docs](https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/JavaScript_basics) (browser), and [W3School tutorial](https://www.w3schools.com/nodejs/nodejs_get_started.asp) (node.js).   
- See what is the [UD-Viz](https://github.com/VCityTeam/UD-Viz) framework.


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



## Deriving your own UD-Viz based demo

Pour rappel ce template est une base pour votre démo il vous donne la structure de départ :  fichiers de configs (IDE, Webpack, .env), scripts executables ( ce qui est dans le dossier ./bin), les package.json (La structure des sous la forme d'un [monorepo](https://en.wikipedia.org/wiki/Monorepo?useskin=vector) = plusieurs paquet en un). Charge à vous de remplir ce template avec votre code et vos ressources.

Pour ce faire la première chose à faire c'est de créer votre propre espace de travail. Si vous voulez créer un nouveau repository avec git vous avez deux manières de procéder :

### Github way

`UD-Viz-Template` is a [Github Template](https://docs.github.com/en/repositories/creating-and-managing-repositories/creating-a-repository-from-a-template) repository. You can chose this repository as base when you create your repository from Github UI.

### CLI way

- Create a new git repository e.g. `https://github.com/exampleuser/MyApp.git` (does not need to be hosted at github).

- Duplicate this git repository refer to [here](https://docs.github.com/en/repositories/creating-and-managing-repositories/duplicating-a-repository#mirroring-a-repository).


## Starting dev

Vous avez maintenant votre propre repository qui prend comme base `UD-Viz-Template` et vous voulez commencer à coder. Cette section est là pour vous aider à commencer.

Reminders:
- Your app is a 3-package application, based on 3-package framework UD-Viz, respectively browser, shared and node. 
- Split-code by interpretation environment:  `browser` package is interpretable by the browser,  `node` package is interpretable by Node.js and  `shared` package is interpretable by both environments.
- The entry point of your application is the main [./package.json](./package.json). See doc [here](https://docs.npmjs.com/cli/v6/configuring-npm/package-json).
- The code is bundled with webpack. See doc [here](https://webpack.js.org/concepts/). *Quick note: if you're wondering why bundled `node` and `shared` code is only used for "testing" purposes*. 

To get an overall understanding of how your application works we will explain what the `npm run debug` command (the first command you run to start your demo) does step by step.

**Unscrambling the command**

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


## Base your application on UD-Viz examples

To learn what you can do with UD-Viz (to get start at least the `@ud-viz/browser` package) you can read the differents [examples](https://github.com/VCityTeam/UD-Viz/tree/master/examples) with attached [documentation](https://github.com/VCityTeam/UD-Viz/tree/master/docs/static/Devel/UD_Viz_Browser) and try to transpose them in your application.

You can start by the [SideBarWidget](https://github.com/VCityTeam/UD-Viz/tree/master/examples/SideBarWidget.html) example. Thanks to this example you pass over all main widgets ud-viz offered you and you see how to create your 3D Scene with iTowns.

*WIP: SOME TUTORIALS ARE BEING WRITTEN* 