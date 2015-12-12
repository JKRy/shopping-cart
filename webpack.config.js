module.exports = {
    entry: './main.js',
    output: {
        path: './',
        filename: 'bundle.js'
    },
    devServer: {
        inline: true,
        port: 3333
    },
    module: {
        loaders: [
            {test: /\.js$/, exclude: /node_modules/, loader: 'babel', query: {presets: ['es2015']}},
            {test: /\.json$/, loader: 'json-loader'},
            {test: /\.jpe?g$|\.gif$|\.png$|\.svg$/, loader: "file?name=./img/[name].[ext]"},
            {test: /\.html/, loader: "file?name=[name].[ext]"},
            {test: /\.scss$/, loader: "style!css!sass"}
        ]
    }
};