 var path = require('path');
 var webpack = require('webpack');

 module.exports = {
     entry: './js/main.js',
     output: {
         path: path.resolve(__dirname, 'build'),
         filename: 'main.bundle.js'
     },
     module: {
        rules: [

        ]
     },
     stats: {
         colors: true
     },
     devtool: 'source-map'
 };