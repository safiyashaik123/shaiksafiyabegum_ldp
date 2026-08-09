const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",

  entry: {
    home: "./src/index.ts",
    counter: "./src/counter/counter.ts",
    color: "./src/color/color.ts",
  },

  devtool: "source-map",

  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
  },

  resolve: {
    extensions: [".ts", ".js"],
  },

  module: {
    rules: [
      {
        test: /\.ts$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },

  plugins: [
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: "./src/index.html",
      chunks: ["home"],
    }),

    new HtmlWebpackPlugin({
      filename: "counter.html",
      template: "./src/counter/counter.html",
      chunks: ["counter"],
    }),

    new HtmlWebpackPlugin({
      filename: "color.html",
      template: "./src/color/color.html",
      chunks: ["color"],
    }),
  ],

  devServer: {
    static: "./dist",
    port: 3000,
    open: true,
  },
};