module.exports = class MyAppNameServer {
  constructor() {}

  start() {
    console.log('MY_APP_ENV process', process.env.MY_ENV_VARIABLE);
  }
};
