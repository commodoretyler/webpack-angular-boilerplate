module.exports = {
  entry: "./src/app.js",
  output: {
    path: __dirname,
    filename: "bundle.js"
  },
  devtool: 'inline-source-map',
  module: {
    loaders: [
      { test: /\.css$/, loader: "style!css" },
      { test: /\.scss$/, loaders: ['style', 'css', 'sass'] },
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader' }
    ]
  }
};
