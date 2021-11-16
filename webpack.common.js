var path = require('path');
var HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    target: ["web"],
    entry: './src/index',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'app.bundle.js',
        clean: true
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.json']
    },
    module: {
        rules: [{
            test: /\.(ts|js)x?$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
        }],
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: "ALPHA-TV-FRAMEWORK",
            template: path.resolve(__dirname, "public") + "/index.html"
        })
    ]
};