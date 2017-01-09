'use strict';

var webpack = require('webpack');
var webpackCommon = require('./webpack.common');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = Object.assign(webpackCommon, {
    entry: './example/index',
    output: {
        path: './dist',
        filename: 'bundle.js'
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('development'),
            __DEV__: true
        }),
        new HtmlWebpackPlugin({
            title: 'Vue contribution calendar',
            template: './example/index.tpl'
        })
  ]
});
