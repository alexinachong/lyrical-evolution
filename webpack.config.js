const path = require('path')
const webpack = require('webpack')

const config = {
  entry: path.join(__dirname, './frontend/javascripts/index.js'),
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, './frontend')
  },
  resolve: {
    extensions: ['.js', '.jsx', '*']
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        query: {
          presets: ['env']
        }
      }
    ]
  },
  plugins: [
    new webpack.ProgressPlugin()
  ],
  devtool: 'source-map'
}

module.exports = config
