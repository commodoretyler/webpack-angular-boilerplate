const path = require('path');
//const ExtractTextPlugin = require("extract-text-webpack-plugin");

//const extractLess = new ExtractTextPlugin({
//    filename: "[name].[contenthash].css",
//    disable: process.env.NODE_ENV === "development"
//});

module.exports = {
  entry: "./src/app.js",
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: "bundle.js"
  },
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.less$/,
        use: [
          { loader: "style-loader" },
          { loader: "css-loader" },
          { loader: "less-loader" }
        ]
      }, {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      }
    ]
  }
};
