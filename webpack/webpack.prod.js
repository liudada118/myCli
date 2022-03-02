const {merge} = require('webpack-merge');
const base = require('./webpack.base.js');

const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = merge(base, {
  mode: 'production',
  
});