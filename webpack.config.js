const BabiliPlugin = require('babili-webpack-plugin');
const path = require('path');
const {argv: {env}} = require('yargs');

//Change this to your library name
//Also remember to change the 'main' entry point in package.json
const libraryName = 'npm-module-es6-boilerplate';
const plugins = [];
let outputFile = '';
let devtool = false;

//For build mode we output a minified file.
//This is what will be published to npm.
//Otherwise we can use the unminified version for development and debugging.
if (env === 'build') {
  plugins.push(new BabiliPlugin());
  outputFile = `${libraryName}.min.js`;
} else {
  outputFile = `${libraryName}.js`;
  devtool = 'source-map';
}

//The default entry point is src/index.js
//The default output is lib/<libraryname>.min.js or .js
const config = {
  entry: path.resolve(__dirname, './src/index.js'), //Change entry file here
  devtool,
  plugins,
  target: 'node',
  output: {
    path: path.resolve(__dirname, './lib'), //Change output directory here
    filename: outputFile,
    library: libraryName,
    libraryTarget: 'umd',
    umdNamedDefine: true,
  },
  module: {
    loaders: [
      {
        test: /(\.jsx|\.js)$/,
        loader: 'babel-loader',
        exclude: /(node_modules|bower_components)/,
      },
      {
        test: /(\.jsx|\.js)$/,
        loader: 'eslint-loader',
        exclude: /node_modules/,
      },
    ],
  },
};

module.exports = config;
