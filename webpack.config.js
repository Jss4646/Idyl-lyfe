const path = require('path');
const ESLintPlugin = require('eslint-webpack-plugin');

const options = {};

module.exports = {
  plugins: [new ESLintPlugin(options)],
  entry: ['./src/js/index.js', './src/scss/index.scss'],
  output: {
    filename: './js/main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [],
      }, {
        test: /\.scss$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'file-loader',
            options: { outputPath: 'css/', name: '[name].min.css' },
          },
          'sass-loader',
        ],
      },
    ],
  },
};
