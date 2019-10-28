const merge = require('webpack-merge')
const base = require('./webpack.base.config.js')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const config = {
  plugins: [
    new HtmlWebpackPlugin({
      inject: true,
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeAttributeQuotes: true,
        minifyJS: true,
        // more options:
        // https://github.com/kangax/html-minifier#options-quick-reference
      },
      // necessary to consistently work with multiple chunks via CommonsChunkPlugin
      chunksSortMode: 'dependency',
      pkv: '1.1',
    }),
  ],
  optimization: {
    splitChunks: {
      chunks: 'all',
    },
  },
}
module.exports = merge(base, config)