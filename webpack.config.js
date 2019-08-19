const path = require('path');

// const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const pkg = require('./package.json');

const packageName = pkg.name;
// const packageVersion = pkg.version;

module.exports = {
  devServer: {
    contentBase: path.resolve('./dist'),
    compress: true,
    port: 9000
  },

  devtool: 'inline-source-map',

  entry: {
    [packageName]: './src/index.js'
  },

  target: 'web',

  resolve: {
    extensions: ['.js', '.jsx'],
    descriptionFiles: ['package.json'],
    modules: ['node_modules']
  },

  output: {
    path: path.resolve('./dist'),
    publicPath: '/',
    filename: '[name].js',
    chunkFilename: '[id].chunk.js'
  },

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.(png|jpe?g|gif|eot|woff|woff2|svg|ttf)([\?]?.*)$/,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]'
        }
      },
      {
        test: /\.css$/i,
        use: [
          'style-loader',
          'css-loader'
        ]
      }
    ]
  },
  
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: pkg.description,
      filename: 'index.html',
      template: 'src/index.html'
    })
  ],
};
