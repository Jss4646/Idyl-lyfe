const path = require('path');
const ESLintPlugin = require('eslint-webpack-plugin');

const options = {};

module.exports = {
  plugins: [new ESLintPlugin(options)],
  entry: ['./src/js/index.ts', './src/scss/index.scss'],
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
      },
      {
        test: /\.tsx$/,
        use: ['ts-loader'],
      }, {
        test: /\.scss$/,
        use: [
          {
            loader: 'file-loader',
            options: { outputPath: 'css/', name: '[name].min.css' },
          },
          'sass-loader',
        ],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
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
