const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const Dotenv = require('dotenv-webpack');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: './js/[name].[contenthash].js',
  },
  mode: 'production',
  resolve: {
    extensions: ['.js'],
    alias: {
      '@utils': path.resolve(__dirname, './src/utils/'),
      '@templates': path.resolve(__dirname, './src/templates/'),
      '@styles': path.resolve(__dirname, './src/styles/'),
      '@images': path.resolve(__dirname, './src/assets/images/'),
    },
  },
  module: {
    rules: [
      {
        test: /\.m?js$/, // Busca todo archivo con extensiones .mjs o .js
        exclude: /node_modules/, // Excluye en la búsqueda de archivos al directorio de node_modules
        use: {
          loader: 'babel-loader', // Utiliza babel para la transpilación
        },
      },
      {
        test: /\.s[ac]ss$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
        generator: {
          filename: './assets/static/images/[contenthash][ext][query]',
        },
      },
      {
        test: /\.(woff|woff2)$/i,
        type: 'asset/resource',
        generator: {
          filename: './assets/static/fonts/[contenthash][ext][query]',
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
      filename: './index.html',
    }),
    new MiniCssExtractPlugin({
      filename: './assets/styles/[name].[contenthash].css',
    }),
    new Dotenv(),
    new CleanWebpackPlugin(),
  ],
  optimization: {
    minimize: true,
    minimizer: [new CssMinimizerPlugin(), new TerserPlugin()],
  },
};
