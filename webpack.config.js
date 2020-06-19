const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const webpack = require('webpack');

module.exports = {
  entry: './lib/js/src/Index.bs.js',
  // If you ever want to use webpack during development, change 'production'
  // to 'development' as per webpack documentation. Again, you don't have to
  // use webpack or any other bundler during development! Recheck README if
  // you didn't know this
  mode: 'production',

  optimization: {
    runtimeChunk: {
      name: 'runtime'
    },
    removeEmptyChunks: false,
    mergeDuplicateChunks: false,
    splitChunks: {
      cacheGroups: {
        commons: {
          test: /[\\/]node_modules[\\/]/,
          name: "vendors",
          chunks: "all"
        }
      }
    }
  },
  output: {
    path: path.join(__dirname, "build"),
    filename: '[name].[contenthash].js',
    chunkFilename: '[name].[contenthash].bundle.js'
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'indexProduction.html',
      title: 'ReasonReact - adilmas13'
    }),
    new CopyWebpackPlugin({
      patterns: [
        { from: 'assets', to: 'assets' }
      ],
    }),
    new CleanWebpackPlugin({
      verbose: true
    })
  ],
};