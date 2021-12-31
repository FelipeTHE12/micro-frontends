const HtmlWebpackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");

module.exports = {
  mode: "development",
  devServer: {
    port: 8082,
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "cart", //remote name
      filename: "remoteEntry.js", //Name of the manifest file
      exposes: { "./CartIndex": "./src/index" }, //alias to filenames and control - sometimes the name of the file can be off context so alias
    }),
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
  ],
};
