const path = require('path');
const webpack = require('webpack');
const autoprefixer = require('autoprefixer');

// webpack production configuration
var config = {
  entry: [
    path.resolve(__dirname, 'examples')
  ],
  output: {
    path: path.resolve(__dirname, 'examples', 'build'),
    filename: 'bundle.js',
    publicPath: '/'
  },
  module: {
    loaders: [
      {test: /.jsx?$/, loader: 'babel', exclude: /node_modules/},
      {test: /\.(s)?css$/, loader: 'style!css!postcss!sass'}
    ]
  },
  postcss: [
    autoprefixer({ browsers: ['last 2 versions'] })
  ],
  plugins: [
    new webpack.DefinePlugin({
      "process.env": {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV ? process.env.NODE_ENV : 'dev')
      }
    })
  ]
};

module.exports = config;
