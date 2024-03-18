const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false
  // configureWebpack: {
  //   entry: './components/index.js' // 指定入口文件路径
  // }
})
