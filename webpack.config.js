const { Module } = require('webpack');
const path = require('path');

Module.exports = {
   entry: './src/app.js',
   output: {
      filename: 'app.js',
      path: path.resolve(__dirname, 'assets', 'scripts')
   }
};