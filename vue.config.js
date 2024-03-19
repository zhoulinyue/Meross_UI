const { defineConfig } = require('@vue/cli-service')
module.exports = {
  // transpileDependencies: true,
  // lintOnSave: false,
  // configureWebpack: {
  //   entry: './components/index.js' // 指定入口文件路径
  // }
  pages: {
    index:{
      entry:'examples/src/main.js',
      template:'public/index.html',
      filename:'index.html'
    }
  }
}
