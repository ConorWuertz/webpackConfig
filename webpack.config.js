 var path = require('path');
 var webpack = require('webpack');
 var MiniCssExtractPlugin = require('mini-css-extract-plugin')

 module.exports = {
     entry: ['./js/main.js','./scss/main.scss'],
     output: {
        path: path.resolve(__dirname, 'build'),
        filename: '[name].[fullhash].bundle.js'
     },
    module: {
    rules: [
        {
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            use: {
                loader: "babel-loader"
            }
        },
        {
            test: /\.s[ac]ss$/i,
            use: [
                MiniCssExtractPlugin.loader,
                'css-loader',
                'sass-loader'
            ]
        },
        {
            test: /\.(png|jpg|jpeg|gif)$/,
            use: [
                'file-loader',
            ],
            },
        {
            test: /\.svg/,
            use: {
                loader: 'svg-url-loader',
                options: {
                    limit: 1048576,
                    encoding: "base64"
                }
            }
            }
        ]
    },
    stats: {
        colors: true
    },
    devtool: 'source-map',
    plugins: [
    new MiniCssExtractPlugin({
        filename: 'style.[fullhash].css'
        })
    ],
 };