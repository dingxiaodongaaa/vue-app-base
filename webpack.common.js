const path = require('path')
const webpack = require('webpack')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')

module.exports = {
    entry: './src/main.js',
    output: {
        filename: 'js/bundle.js',
        path: path.join(__dirname, 'dist')
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                use: 'vue-loader'
            },
            {
                test: /\.js$/,
                use: 'babel-loader'
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader', 
                    'css-loader'
                ]
            },
            {
                test: /\.less$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'less-loader'
                ]
            },
            {
                test: /\.(png|jpe?g|gif)$/,
                use: {
                    loader: 'url-loader',
                    options: {
                        limit: 10 * 1024,
                        esModule: false,
                        name: 'img/[name].[contenthash:8].[ext]'
                    },
                }
            }
        ]
    },
    plugins: [
        new webpack.DefinePlugin({
            BASE_URL: JSON.stringify('./')
        }),
        new VueLoaderPlugin(),
        new HtmlWebpackPlugin({
            title: 'app',
            template: './public/index.html'
        }),
        new CopyWebpackPlugin([
            'public'
        ])
    ]
}