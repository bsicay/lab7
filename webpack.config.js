const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: {
        app: './src/js/app.js'
      },
    output: {
        path: path.resolve(__dirname, 'dist_webpack'),
        filename: '[name].bundle.js',
    },
    optimization: {
      splitChunks: {
        chunks: 'all',
        name: false,
      },
    },
    plugins: [
        new HtmlWebpackPlugin({
          title: 'Libreria',
          template: './src/index.html'
        })
      ]
}