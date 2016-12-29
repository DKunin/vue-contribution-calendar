var webpack = require('webpack');

module.exports = {
    entry: './src/contributions-calendar',
    output: {
        path: './dist',
        filename: 'contributions-calendar.min.js'
    },
    resolve: {
        extensions: ['', '.js', '.vue']
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                loaders: ['babel-loader'],
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
            }
        ]
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('development'),
            __DEV__: true
        }),
        new webpack.optimize.UglifyJsPlugin({
            sourceMap: false,
            drop_console: true,
            compress: {
                warnings: false
            }
        })
  ]
};
