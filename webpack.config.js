const path = require('path');

module.exports = {
  entry: {
    app: './src/assets/js/app.js',
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'public/assets'),
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.scss$/i,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader', 'postcss-loader'],
      },
    ],
  },
  devServer: {
    static: {
      directory: path.join(__dirname, 'public'),
    },
    port: 8000,
    hot: true,
  },
};