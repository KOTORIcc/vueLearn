const { defineConfig } = require('@vue/cli-service')
const AutoImport = require('unplugin-auto-import/webpack')
const Components = require('unplugin-vue-components/webpack')
const { ElementPlusResolver } = require('unplugin-vue-components/resolvers')

module.exports = defineConfig({
  publicPath: './',
  // baseUrl: process.env.NODE_ENV === "production" ? "./" : "/",
  transpileDependencies: true,
  configureWebpack: {
    plugins: [
      AutoImport({
        resolvers: [ElementPlusResolver()],
      }),
      Components({
        resolvers: [ElementPlusResolver( {importStyle: 'sass'})],
      }),
    ],
  },
  css: {
    loaderOptions: {
      sass: {
        additionalData: `
          @use "@/styles/common.scss" as *;
          @use "@/styles/var.scss" as *;
          @use "@/styles/element/index.scss" as *;` //引入全局变量
      }
    }
  }
})
