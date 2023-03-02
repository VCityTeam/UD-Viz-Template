const udvizNode = require('@ud-viz/node');

module.exports = class MyAppNameServer {
  constructor() {}

  start(config) {
    const expressAppWrapper = new udvizNode.ExpressAppWrapper();

    // eslint-disable-next-line no-undef
    console.log(MY_ENV_VARIABLE);

    return expressAppWrapper.start(config);
  }
};
