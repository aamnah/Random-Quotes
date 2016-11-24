const htmlWebpack = require('html-webpack-plugin');
const htmlWebpackPlugin = new htmlWebpack({
  template: __dirname + '/app/index.html',
  filename: 'index.html',
  inject: 'body'
});

module.exports = {
  entry: [
    "./app/index.jsx"
  ],

  output: {
    filename: "bundle.js",
    path: __dirname + "/dist"
  },

  module: {
    loaders: [
      {
        test: /\.(js|jsx)$/, exculde: /node_modules/, loader: "babel-loader"
      }
    ]
  },

  plugins: [
    htmlWebpackPlugin
  ]

}