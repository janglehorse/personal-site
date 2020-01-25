webpack = require('webpack')
path = require('path')

const HtmlWebPackPlugin = require("html-webpack-plugin");
const CopyPlugin = require('copy-webpack-plugin');


const htmlPlugin = new HtmlWebPackPlugin({
  template: "./src/index.html",
  filename: "./index.html"
});

const copyPluggin = new CopyPlugin([
  {
    from: './static/img/', 
    to: './static/img'
  }
]);

module.exports = {
  entry: {
    app: './src/index.js'
  },
  output: {
    path: path.resolve(__dirname, 'build'),
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.less$/,
        include: /style/,
        use: [
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader'
          },
          {
            loader: 'less-loader'
          }
        ]
      },
      {
        test: /\.(jpg|png)$/,
        use: {
          loader: 'file-loader'
        }
      }
    ]
  },
  plugins: [
    htmlPlugin,
    copyPluggin
  ]
}