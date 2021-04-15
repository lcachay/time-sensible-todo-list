// const { Module } = require('webpack');
const path = require('path');

module.exports = {
   mode: 'development',
   entry: './src/app.js',
   output: {
      filename: 'app.js',
      path: path.resolve(__dirname, 'assets', 'scripts'),
      publicPath: 'assets/scripts/'
   },
   devtool: 'eval-cheap-module-source-map',
   devServer: {
      writeToDisk: true
   }
};