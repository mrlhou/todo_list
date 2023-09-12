const { defineConfig } = require("@vue/cli-service");
const { config } = require("@vue/test-utils");
module.exports = defineConfig({
  transpileDependencies: true,
  configureWebpack: {
    performance: {
      hints: false,
    },
    optimization: {
      splitChunks: {
        minSize: 10000,
        maxSize: 250000,
      },
    },
  },
  publicPath: "/todo_list/",
  chainWebpack: (config) => {
    config.output.chunkFilename(`js/[name].[id].[chunkhash:8].js`);
  },
});
