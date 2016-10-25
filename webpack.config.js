var webpack = require('webpack');
var path = require('path');
var publicPath = 'http://localhost:3000/';

module.exports = {
  entry: {
    path: ['./src/client/app.js']
  },
  output: {
    path: path.resolve('./public'),
    publicPath: publicPath,
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'babel'
      }
    ]
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ]
}
