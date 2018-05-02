const path = require('path');

module.exports = {
    entry: path.join(__dirname, 'src', 'index.js'),
    output: {
        path: path.join(__dirname, 'build'),
        filename: 'main.js'
    },

    module: {
        rules: [
            { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" }
        ]
    }

};



// const path = require('path');
// const ExtractTextPlugin = require("extract-text-webpack-plugin");
//
// const extractSass = new ExtractTextPlugin({
//     filename: "css/style.css",
//     // disable: process.env.NODE_ENV === "development"
// });
//
//
// let conf = {
//     entry: './src/index.js',
//     output: {
//         path: path.resolve(__dirname, "./build/"),
//         filename: "main.js",
//         publicPath: "build/"
//     },
//     devServer: {
//         overlay: true
//     },
//     module: {
//         rules: [
//             {
//                 test: /\.js$/,
//                 loader: 'babel-loader',
//                 exclude: '/node_modules/',
//                 // use: 'jshintLoader'
//             },
//             {
//                 test: /\.scss$/,
//                 use: extractSass.extract({
//                     use: [{
//                         loader: "css-loader"
//                     }, {
//                         loader: "sass-loader"
//                     }],
//                     // use style-loader in development
//                     fallback: "style-loader"
//                 })
//             }
//
//         ]
//     },
//     plugins: [
//         extractSass
//     ],
//     // devtool: "eval-sourcemap"
//
// };
//
// module.exports = (env, options) => {
//
//     // let production = options.mode === 'production';
//     //
//     // conf.devtool = production ? false:'eval-sourcemap';
//
//
//     return conf;
//
// };