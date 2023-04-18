const ExpressAppWrapper = require('@ud-viz/node').ExpressAppWrapper;

module.exports = class MyAppNameServer {
  constructor() {}

  start(config) {
    const expressAppWrapper = new ExpressAppWrapper();

    // eslint-disable-next-line no-undef
    console.log(MY_ENV_VARIABLE);

    return expressAppWrapper.start(config);
  }
};
