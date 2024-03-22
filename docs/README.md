# meross_ui 在线文档平台

docs 文件夹采用 docsify 平台搭建，用于展示在第三方项目中如何使用封装的组件，并提供典型页面的展示及使用

docsify 官网：https://docsify.js.org/#/zh-cn/

### 运行
在 `docs 文件夹`下运行：

```
docsify serve
```
如果在`根目录`下运行：
```
docsify serve docs
```

### 部署
todo

### 项目结构
```
├── img                         # 图片
├── page-examples               # 示例页面
    ├── _sidebar.md               # 示例页面的侧边栏
    ├── pages                     # 具体文档
├── ui-examples                 # UI组件示例
    ├── _sidebar.md               # UI组件的侧边栏：包括业务组件及原子组件
    ├── pages                     # 具体文档
├── fast-start.md               # 快速开始文档
├── _navbar.md                  # 顶部导航栏
├── .nojekyll                   # 用于防止 GitHub Pages 忽略下划线开头的文件
├── index.html                  # docsify 基础配置, 文档平台样式调整
├── README.md                   # 项目使用文档

```