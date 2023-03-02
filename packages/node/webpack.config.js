const path = require('path');
const nodeExternals = require('webpack-node-externals');
const webpack = require('webpack');
require('dotenv').config({ path: '../../.env' });

const mode = process.env.NODE_ENV;

// Inject environnement variables (they have to be declare in your .env !!!)
const keyEnvVariables = ['MY_ENV_VARIABLE'];
const plugins = [];
const params = {};
keyEnvVariables.forEach(function (key) {
  console.log(key, ' = ', JSON.stringify(process.env[key]));
  params[key] = JSON.stringify(process.env[key]);
});
plugins.push(new webpack.DefinePlugin(params));

let outputPath;
if (mode === 'development') {
  outputPath = path.resolve(__dirname, 'dist/' + mode);
} else {
  outputPath = path.resolve(__dirname, 'dist/' + mode);
}

module.exports = () => {
  return {
    target: 'node',
    mode: mode,
    externals: [nodeExternals()],
    entry: path.resolve(__dirname, 'src/index.js'),
    output: {
      path: outputPath,
      filename: 'bundle.js',
      library: 'myAppNameNode',
      libraryTarget: 'umd',
      umdNamedDefine: true,
    },
    plugins: plugins,
  };
};
