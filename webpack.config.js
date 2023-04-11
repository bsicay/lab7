const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

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
        }),
        new MiniCssExtractPlugin({
            filename: 'styles.css' // Nombre del archivo CSS generado
          })
      ],
      module: {
        rules: [
          {
            test: /\.css$/i,
            use: [
              MiniCssExtractPlugin.loader, // Extrae los estilos a un archivo css separado
              'css-loader' // Convierte los archivos CSS en un módulo de CommonJS
            ]
          }, 
          {
            test: /\.js$/,
            exclude: /node_modules/,
            use: "babel-loader"
          }
        ]
      },
}