'use strict';

var webpack = require('webpack');
var webpackCommon = require('./webpack.common');

module.exports = Object.assign(webpackCommon, {
    entry: './src/contribution-calendar',
    output: {
        path: './dist',
        filename: 'index.js',
        publicPath: '/',
        library: 'contributionCalendar',
        libraryTarget: 'umd'
    },
    plugins: [
        new webpack.DefinePlugin({
          'process.env': {
            NODE_ENV: '"production"'
          }
        }),
        new webpack.optimize.OccurenceOrderPlugin()
  ]
});
