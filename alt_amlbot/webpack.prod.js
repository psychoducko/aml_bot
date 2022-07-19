const path = require("path");
const webpack = require("webpack");
const {CleanWebpackPlugin} = require("clean-webpack-plugin");

module.exports =  {
  mode: 'production',
  devtool: 'source-map',
  entry: {
    "admin-scrips": './frontend-src/index.js'
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


  output: {
    path: path.resolve(__dirname, "./build/public/js/"),
    chunkFilename: "[name].[contenthash].bundle.js",
    publicPath: "/altrp-plugins/swagger-ui/js/",
    filename: "[name].js"
  },

  plugins: [
    new webpack.DefinePlugin({
      "process.env": "{}",
      global: {}
    }),
    new CleanWebpackPlugin()]
}
