/**
 * Created by shatyajeet on 07/06/16.
 */

var HTMLWebpackPlugin = require('html-webpack-plugin');
var HTMLWebpackPluginConfig = new HTMLWebpackPlugin({
  template: __dirname + '/public/index.html',
  filename: 'index.html',
  inject: 'body'
});

module.exports = {
  entry: './public/js/App.js',
  output: {
    path: './dist',
    publicPath: '/',
    filename: 'disc_us.js'
  },
  module: {
    loaders: [{
      test: /\.jsx?$/,
      exclude: /node_modules/,
      loader: 'babel',
      query: {
        presets: ['es2015', 'react']
      }
    }]
  },
  plugins: [HTMLWebpackPluginConfig]
};
