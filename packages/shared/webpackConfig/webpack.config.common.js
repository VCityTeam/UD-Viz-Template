const webpack = require('webpack');
require('dotenv').config({ path: '../../.env' });

// Inject environnement variables (they have to be declare in your .env !!!)
const keyEnvVariables = ['MY_ENV_VARIABLE'];
const plugins = [];
const params = {};
keyEnvVariables.forEach(function (key) {
  console.log(key, ' = ', JSON.stringify(process.env[key]));
  params[key] = JSON.stringify(process.env[key]);
});
plugins.push(new webpack.DefinePlugin(params));

module.exports = {
  entry: ['./src/index.js'],
  output: {
    filename: 'bundle.js',
    library: 'myAppNameShared',
    libraryTarget: 'umd',
    umdNamedDefine: true,
    globalObject: 'this',
  },
  plugins: plugins,
  module: {
    rules: [],
  },
  resolve: {
    modules: [
      'node_modules', // The default
      'src',
    ],
  },
};
