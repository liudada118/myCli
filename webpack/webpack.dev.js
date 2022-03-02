const {merge} = require('webpack-merge');
const base = require('./webpack.base.js');

module.exports = merge(base, {
  mode: 'development',
  devServer : {
      open : true,
      host : 'localhost',
      port : '8080',
      hot : true
  }
});