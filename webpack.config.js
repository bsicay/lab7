const path = require('path')

module.exports = {
    mode: 'development',
    entry: {
        app: './src/app/index.js'
      },
    output: {
        path: path.resolve(__dirname, 'dist_webpack'),
        filename: '[name].bundle.js',
    }
}