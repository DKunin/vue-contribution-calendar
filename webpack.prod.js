var webpack = require('webpack');
var path = require('path')
var projectRoot = path.resolve(__dirname, './')

module.exports = {
    entry: './src/contributions-calendar',
    output: {
        path: './dist',
        filename: 'index.js',
        publicPath: '/',
        library: 'contributionsCalendar',
        libraryTarget: 'umd'
    },
    resolve: {
        extensions: ['', '.js', '.vue'],
        fallback: [path.join(__dirname, '../node_modules')],
        alias: {
          'src': path.resolve(__dirname, '../src')
        }
    },
    resolveLoader: {
        fallback: [path.join(__dirname, '../node_modules')]
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                loaders: ['babel'],
                include: projectRoot,
                exclude: [/node_modules/]
            },
            {
                test: /\.vue$/,
                loaders: ['vue'],
                exclude: [/node_modules/]
            },
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader'
            },
            {
                test: /\.html$/,
                loader: 'vue-html'
            },
            {
                test: /\.(png|jpg|svg|gif)(\?embed)?$/,
                loader: 'url',
                query: {
                  limit: 10000,
                  name: '[name].[ext]?[hash:7]'
                }
            }
        ]
    },
    vue: {
        loaders: {
            js: 'babel-loader'
        }
    },
    plugins: [
        new webpack.DefinePlugin({
          'process.env': {
            NODE_ENV: '"production"'
          }
        }),
        // new webpack.optimize.UglifyJsPlugin({
        //   compress: {
        //     warnings: false
        //   }
        // }),
        new webpack.optimize.OccurenceOrderPlugin()
  ]
};
