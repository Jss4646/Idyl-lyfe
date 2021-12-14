const path = require('path');
const ESLintPlugin = require('eslint-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

const options = {};

module.exports = {
  plugins: [new ESLintPlugin(options), new CopyPlugin({ patterns: [{ from: 'src/imgs', to: 'imgs' }] })],
  entry: ['./src/js/index.ts', './src/scss/index.scss'],
  output: {
    filename: './js/main.js',
    path: path.resolve(__dirname, './public/assets'),
    publicPath: '/public/',
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.(tsx|ts)$/,
        use: ['ts-loader'],
      },
      {
        test: /\.js$/,
        use: ['source-map-loader'],
      },
      {
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
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'imgs',
            },
          },
        ],
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
    static: [{ directory: path.join(__dirname, 'public'), watch: true }, { directory: path.join(__dirname, 'public/assets/imgs'), publicPath: '/imgs' }],
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
