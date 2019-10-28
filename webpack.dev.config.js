const merge = require('webpack-merge')
const base = require('./webpack.base.config.js')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')
const MiniCssExtractPlugin = require("mini-css-extract-plugin")

const config = {
  plugins: [
    new HtmlWebpackPlugin({
      filename: path.resolve(__dirname, 'dist/index.html'),
      template: path.resolve(__dirname, 'dist/index.html'),
      inject: true,
      pkv: '1.1',
      localFlag: true,
      akamaiIgnore: '1',
    }),
    new MiniCssExtractPlugin({})
  ],
  devServer: {
    contentBase: './dist',
  },
}
module.exports = merge(base, config)