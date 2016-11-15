'use strict';

const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const UglifyJsPlugin = webpack.optimize.UglifyJsPlugin;
const autoprefixer = require('autoprefixer');

let reactExternal = {root: 'React', commonjs2: 'react', commonjs: 'react', amd: 'react'};
let reactDOMExternal = {root: 'ReactDOM', commonjs2: 'react-dom', commonjs: 'react-dom', amd: 'react-dom'};

// webpack dist configuration
let config = {
  entry: {
    'react-simple-modal': './lib/index.js',
    'react-simple-modal.min': './lib/index.js'
  },
  externals: {
    'react': reactExternal,
    'react-dom': reactDOMExternal
  },
  output: {
    filename: '[name].js',
    chunkFilename: '[id].chunk.js',
    path: 'dist',
    publicPath: '/',
    libraryTarget: 'umd',
    library: 'ReactSimpleModal'
  },
  module: {
    loaders: [
      { test: /\.js?$/, exclude: /node_modules/, loader: 'babel'},
      { test: /\.(s)?css$/, loader: ExtractTextPlugin.extract("style", "css!postcss!sass")}
    ]
  },
  plugins: [
    new ExtractTextPlugin("react-simple-modal.css"),
    new webpack.DefinePlugin({
      "process.env": {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV ? process.env.NODE_ENV : 'dev')
      }
    }),
    new UglifyJsPlugin({
      include: /\.min\.js$/,
      minimize: true,
      compress: {warnings: false}
    })
  ],
  postcss: [
    autoprefixer({ browsers: ['last 2 versions'] })
  ]
};

module.exports = config;
