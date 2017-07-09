const path = require("path");
const webpack = require("webpack");

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
              configFileName: "tsconfig.json",
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new webpack.DefinePlugin({
      "__IVI_DEV__": false,
      "__IVI_BROWSER__": false,
    }),
    new webpack.optimize.ModuleConcatenationPlugin(),
  ],
  resolve: {
    alias: {
      "ivi-html": "ivi-ssr-html",
      "ivi-events": "ivi-ssr",
      "ivi-scheduler": "ivi-ssr",
      "ivi": "ivi-ssr",
    },
    mainFields: ["serverModule", "es2015", "module", "main"],
    extensions: [".ts", ".js"],
  },
};
