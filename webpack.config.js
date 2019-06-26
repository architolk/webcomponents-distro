const path = require('path');
const webpack = require('webpack');

const buildDir = path.resolve(__dirname, 'dist');
const env = process.env.NODE_ENV || 'development';

module.exports = {
  mode: env,
  target: 'web',
  entry: {
    dwslib: path.join(__dirname, 'dwslib.js'),
  },
  output: {
    path: buildDir,
    filename: '[name].js',
    library: 'dwslib'
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          rootMode: "upward",
        },
      }
    ]
  }
};
