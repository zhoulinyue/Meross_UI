### 配置私有仓库
添加私有仓库后，下载源即为公司私有源，只有公司私有源才可下载 meross_ui。

在项目`根目录`下添加文件`.npmrc`，，内容如下：
```
always-auth=true
registry=http://xxxxx:4873/ // todo 

```

### 安装

```
npm install meross_ui
```
安装成功后，项目 package.json、node_modules 中将会增加 meross_ui 依赖，默认下载最新版本

### 使用

见 [常用组件](page-examples/pages/list-template.md) 及 [典型页面](page-examples/pages/list-template.md)