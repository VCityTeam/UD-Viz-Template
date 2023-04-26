const express = require('express');
const { stringReplace } = require('string-replace-middleware');
const app = express();

// run an express server
const port = process.argv[2];
const NODE_ENV = process.env.NODE_ENV || 'development';
const runMode = NODE_ENV === 'production' ? 'release' : 'debug';

const options = {
  contentTypeFilterRegexp: /text\/html/,
};

app.use(
  stringReplace(
    {
      RUN_MODE: runMode,
    },
    options
  )
);

app.use(express.static('./packages/browser'));
app.listen(port);

const bundlePath = '../packages/node/dist/' + runMode + '/bundle.js';

try {
  // start applicaction server
  const { MyAppNameServer } = require(bundlePath);
  const myAppNameServer = new MyAppNameServer();
  myAppNameServer.start();
} catch (e) {
  console.error(e);
}
