const merge = require("webpack-merge");
const common = require("./webpack.common.js");

module.exports = merge(common, {
  mode: "development",
  devServer: {
    // contentBase: "/build",
    hot: true,
    // disableHostCheck: true,
    port: 3000,
    proxy: [
      {
        context: ["/api"],
        target: "http://localhost:59340",
        secure: false,
        changeOrigin: true,
        logLevel: "debug"
      }
    ]
  },
  devtool: "inline-source-map",
  watch: true,
  watchOptions: {
    aggregateTimeout: 300,
    poll: 1000,
    ignored: /node_modules/
  }
});

