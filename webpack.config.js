const path = require("path");
const WebpackShellPluginNext = require('webpack-shell-plugin-next');

module.exports = {
  output: {
    path: path.join(__dirname, "/dist"),
    filename: "bundle.js",
  },
  mode: 'development',
  entry: "./",
  devServer: {
    port: 3000,
    watchContentBase: true,
  },
  plugins: [
    new WebpackShellPluginNext({
      onBuildStart:{
        scripts: ['echo "Building bundle..."'],
        blocking: true,
        parallel: false
      },
      onBuildEnd:{
        scripts: ['nodemon ./dist/bundle.js'],
        blocking: false,
        parallel: true
      }
    })
  ],
  module: {
    rules: [
      {
        test: /\.(js)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
    ],
  },
};
