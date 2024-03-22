# meross_ui

### 构建
```
npm run build:com
```
### 发布

发布前需要修改根目录下 package.json 的 version；
如果登录过，无需 npm login，可直接发布.

```
npm login
npm publish
```

### 项目结构
```
├── components              # 封装的组件
    ├── demo                # 具体的组件
      ├── src
          ├── main.vue            
    ├── index.js            # 某个组件的出口文件
  ├── index.js              # 所有组件的出口文件
├── dist                    # 打包文件
├── docs                    # 展示文档
├── examples                # 组件示例、典型页面、常见布局，用于本地调试组件源码
├── node_modules            # node依赖包
├── src
    ├── utils               # 公共方法
    ├── index.js            # 出口文件
├── package.json            # 依赖包管理
├── vue.config.js           # 项目配置文件

```

### 项目管理
 （目前使用的zly个人githab、npm、账号）
githab: https://github.com/zhoulinyue/Meross_UI.git
npm: https://www.npmjs.com/package/meross_ui
账号：zhoulinyue