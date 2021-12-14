const path = require('path');
const ESLintPlugin = require('eslint-webpack-plugin');

const options = {};

module.exports = {
  plugins: [new ESLintPlugin(options)],
  entry: ['./src/js/index.js', './src/scss/index.scss'],
  output: {
    filename: './js/main.js',
    path: path.resolve(__dirname, './public/dist'),
    publicPath: '/public/',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: ['source-map-loader'],
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
  devtool: 'eval-source-map',
  devServer: {
    static: { directory: path.join(__dirname, 'public'), watch: true },
    client: {
      logging: 'none',
      overlay: { errors: true, warnings: false },
    },
    compress: true,
    port: 3000,
    devMiddleware: {
      writeToDisk: true,
    },
  },
};
