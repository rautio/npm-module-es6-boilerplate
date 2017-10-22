// Webpack Config

var webpack = require('webpack');
var BabiliPlugin = require('babili-webpack-plugin');
var path = require('path');
var env = require('yargs').argv.env;

//Change this to your library name
//Also remember to change the 'main' entry point in package.json
var libraryName = 'iterate-multiple-files';
var plugins = [], outputFile;

//For build mode we output a minified file. This is what will be published to npm.
//Otherwise we can use the unminified version for development and debugging.
if(env === 'build'){
  plugins.push(new BabiliPlugin());
  outputFile = libraryName + '.min.js';
}
else{
  outputFile = libraryName + '.js';
}

//The default entry point is src/index.js
//The default output is lib/<libraryname>.min.js or .js
var config = {
  entry: __dirname + '/src/index.js', //Change entry file here
  devtool: 'source-map',
  plugins: plugins,
  target: 'node',
  output: {
    path: __dirname + '/lib', //Change output directory here
    filename: outputFile,
    library: libraryName,
    libraryTarget: 'umd',
    umdNamedDefine: true
  },
  module: {
    loaders: [
      {
        test: /(\.jsx|\.js)$/,
        loader: 'babel-loader',
        exclude: /(node_modules|bower_components)/
      },
      {
        test: /(\.jsx|\.js)$/,
        loader: "eslint-loader",
        exclude: /node_modules/
      }
    ]
  }
};

module.exports = config;