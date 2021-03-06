const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const TerserJSPlugin = require('terser-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin= require('optimize-css-assets-webpack-plugin');
// console.log(path.resolve());
// console.log(path.join(__dirname, './dist'));
const config = {
  mode: 'development',
  entry: './src/index.js',
  optimization: {
    minimizer: [new TerserJSPlugin({}), new OptimizeCSSAssetsPlugin({})]
  },
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, './dist')
  },
  module: {
    rules: [
      {
        test: /\.(scss|sass)$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 5*1024
            }
          }
        ]
      },{
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: ['file-loader']
      },{
        test:/\.js$/,
        loader: 'babel-loader'
      }
    ]
  },
  devServer: {
      hot: true
  },
  plugins: [
    new HtmlWebpackPlugin({
      // 打包后文件名
      filename: 'index.html',
      // 需要打包入口HTML文件
      template: 'template.html'
    }),
    // 在没有HTML文件时帮助创建HTML文件
    new webpack.HotModuleReplacementPlugin(),
    // 清楚无用的构建文件
    new CleanWebpackPlugin(),
    // 复制静态资源
    new CopyWebpackPlugin({
      patterns: [
        {
          from: path.join(__dirname, 'assets'),
          to: 'assets'
        }
      ]
    }),
     new MiniCssExtractPlugin({
       filename: '[name].css',
       chunkFilename: '[id].css',
     })
  ],

};
module.exports = config;
