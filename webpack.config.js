var webpack = require('webpack');
var RewirePlugin = require("rewire-webpack");
var path = require('path');

var entry = ['./tests/main.js'];
var jsxLoaders = ['babel-loader'];

var config = {
  entry: entry,
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  module: {
    loaders: [
      { test: /\.jsx?$/, loaders: jsxLoaders, exclude: /node_modules/ },
    ]
  },
    plugins: [
        new RewirePlugin(),
    ],
  resolve: {
    modulesDirectories: ['node_modules'],
    extensions: ['', '.js', '.jsx']
  },
  devtool: 'inline-source-map'
};

module.exports = config;
