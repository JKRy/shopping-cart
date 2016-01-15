var path = require('path');
var webpack = require('webpack');

module.exports = {
    entry: path.join(__dirname, 'src/app'),
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    devServer: {
        inline: true,
        port: 3333
    },
    resolve: {
        modulesDirectories: ['node_modules']
    },
    module: {
        preLoaders: [
            {test: /\.js$/, loader: 'eslint', exclude: /node_modules/},
        ],
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015', 'stage-0']
                }
            },
            {
                test: /\.json$/,
                loader: 'json-loader'
            },
            {
                test: /\.jpe?g$|\.gif$|\.png$|\.svg$/,
                loader: "file?name=./img/[name].[ext]"
            },
            {
                test: /\.html/,
                loader: "file?name=[name].[ext]"
            },
            {
                test: /\.scss$/,
                loader: "style!css!sass"
            },
            {
                test: /\.hbs/,
                loader: "handlebars-template-loader"
            }
        ]
    }
};
