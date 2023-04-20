const path = require('path');
const mode = process.env.NODE_ENV;
const nodeExternals = require('webpack-node-externals');
const webpack = require('webpack');
const { merge } = require('webpack-merge');

require('dotenv').config({ path: '../../.env' });

const debugBuild = mode === 'development';

// Inject environnement variables (they have to be declare in your .env !!!)
const keyEnvVariables = ['MY_ENV_VARIABLE'];
const plugins = [];
const params = {};
keyEnvVariables.forEach(function (key) {
  console.log(key, ' = ', JSON.stringify(process.env[key]));
  params[key] = JSON.stringify(process.env[key]);
});
plugins.push(new webpack.DefinePlugin(params));

const commonConfig = {
  target: 'node',
  externals: [nodeExternals()],
  entry: path.resolve(__dirname, 'src/index.js'),
  output: {
    filename: 'bundle.js',
    library: 'myAppNameNode',
    libraryTarget: 'umd',
    umdNamedDefine: true,
  },
  plugins: plugins,
};

const devConfig = {
  mode: 'development',
  devtool: 'source-map',
  output: {
    path: path.resolve(__dirname, 'dist/debug'),
  },
};

const prodConfig = {
  mode: 'production',
  output: {
    path: path.resolve(__dirname, 'dist/release'),
  },
};

module.exports = merge(commonConfig, debugBuild ? devConfig : prodConfig);
