const path = require("path");
const webpack = require("webpack");
const BabiliPlugin = require("babili-webpack-plugin");

module.exports = {
  target: "node",
  entry: "./src/main.ts",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "ts-loader",
            options: {
              configFile: "tsconfig.json",
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new webpack.optimize.ModuleConcatenationPlugin(),
    new BabiliPlugin(),
  ],
  resolve: {
    alias: {
      "ivi-html": "ivi-ssr-html",
      "ivi-svg": "ivi-ssr-svg",
      "ivi-events": "ivi-ssr",
      "ivi-scheduler": "ivi-ssr",
      "ivi": "ivi-ssr",
      "ivi-vars": path.join(__dirname, "node_modules", "ivi-vars", "node"),
    },
    mainFields: ["serverModule", "es2015", "module", "main"],
    extensions: [".ts", ".js"],
  },
};
