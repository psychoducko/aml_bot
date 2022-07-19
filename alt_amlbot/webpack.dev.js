const path = require("path");
const webpack = require("webpack");
const {CleanWebpackPlugin} = require("clean-webpack-plugin");

module.exports =  {
  mode: "development",
  devtool: "inline-source-map",
  entry: {
    admin: './frontend-src/index.js'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules|bower_components)/,
        loader: "babel-loader",
        options: {
          presets: ["@babel/env"]
        }
      },
     {
        test: /\.s[ac]ss$/i,
        use: [
          "style-loader",
          "css-loader",
          "sass-loader"
        ]
      },
      {
        test: /\.css$/i,
        use: [
          "style-loader",
          "css-loader",
        ]
      },
      {
        test: /\.svg$/,
        exclude: /slick.svg$|spritesheet.svg$/,
        use: [
          {
            loader: "babel-loader"
          },
          {
            loader: "react-svg-loader",
            options: {
              jsx: true
            }
          }
        ]
      },
      {
        test: /(\.(woff|woff2|eot|ttf|otf)|slick.svg)$/,
        use: ["file-loader"]
      },
      {
        test: /\.(png|jpg|gif)$/,
        loader: "file-loader",
        options: {
          name: "[path][name].[ext]"
        }
      }
    ]
  },
  resolve: {
    extensions: ["*", ".js", ".jsx"]
  },
  devServer: {
    disableHostCheck: true,
    port: 3400,
    publicPath: "http://localhost:3400/src/",
    hotOnly: true,
    filename: '[name].js',
    historyApiFallback: true,
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.DefinePlugin({
      "process.env": "{}",
      global: {}
    }),
    new CleanWebpackPlugin()]
}
