/* The environment variables contained in .env are loaded into the Node.js process*/
const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, '../../../.env') });

module.exports = class MyAppNameServer {
  constructor() {}

  start() {
    console.log(process.env.MY_ENV_VARIABLE);
  }
};
