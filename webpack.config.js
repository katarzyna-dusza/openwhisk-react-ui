const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
    template: './src/index.html',
    filename: 'index.html',
    inject: 'body'
});

const ExtractTextPluginConfig = new ExtractTextPlugin({
    filename: '[name].bundle.css',
    allChunks: true,
});

const CopyWebpackPluginConfig = new CopyWebpackPlugin([
        { from: './src/images/', to: './src/images/' },
        { from: './favicon.ico', to: './favicon.ico' }
    ], {
    "ignore": [
        ".gitignore"
    ],
    "debug": "warning"
});

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve('dist'),
        filename: '[name].js',
        publicPath: '/'
    },
    resolve: {
        mainFields: ["browser", "module", "main"]
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /\.jsx$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /\.scss$/,
                loader: ExtractTextPlugin.extract(['css-loader?url=false', 'sass-loader?url=false'])
            }
        ]
    },
    plugins: [
        HtmlWebpackPluginConfig,
        ExtractTextPluginConfig,
        CopyWebpackPluginConfig
    ],
    devServer: {
        historyApiFallback: true,
        contentBase: './dist',
    }
};