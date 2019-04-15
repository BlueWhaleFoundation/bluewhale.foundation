const path = require("path");
const webpack = require("webpack");
var nodeExternals = require("webpack-node-externals");
const Dotenv = require("dotenv-webpack"); // dotenv work in webpack
const TsconfigPathsPlugin = require("tsconfig-paths-webpack-plugin"); // tsconfig.js 파일 설정

module.exports = {
  entry: "./index.js",
  devtool: "eval",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist")
  },
  node: {
    net: "empty",
    fs: "empty"
  },
  module: {
    rules: [
      // babel loader
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"]
          }
        }
      },
      {
        test: /\.tsx?$/, // tsx
        loader: "ts-loader"
      },
      {
        test: /\.scss$/, // css
        use: ["style-loader", "vue-style-loader", "css-loader", "sass-loader"]
      },
      {
        // images
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[path][name].[ext]",
              context: "./",
              outputPath: "./"
            }
          }
        ]
      },
      {
        test: /\.(png|jpeg|ttf|...)$/,
        use: [
          { loader: "url-loader", options: { limit: 8192 } }
          // limit => file.size =< 8192 bytes ? DataURI : File
        ]
      }
    ]
  },
  resolve: {
    extensions: [".js", ".vue", ".json", ".ts", ".tsx"],
    plugins: [
      new TsconfigPathsPlugin({
        configFile: "./tsconfig.json"
      })
    ],
    alias: {
      vue$: "vue/dist/vue.esm.js"
    }
  },

};
