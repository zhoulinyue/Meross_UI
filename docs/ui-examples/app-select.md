## App 选择组件 <!-- {docsify-ignore} -->

<div class="app-select">
  <iframe src="http://localhost:8080/#/app-select"></iframe>
</div>

### 注册

在全局中注册或者需要使用的页面注册

- 全局注册 `main.js`

```javascript
import appSelect from "meross_ui";

Vue.use(appSelect)
```

- 单页面注册

```javascript
import appSelect from "meross_ui";

components: {
  appSelect
}
```

### 页面中使用

- html 中引入 appSelect 组件，绑定更新函数

```html
<appSelect @update="handleUpdate"></appSelect>
```

- methods 中注册 handleUpdate 方法

```javascript
handleUpdate(value) {
  this.selectValue = value;
}

```

其中`selectValue`为父组件中接收选择框的值

### 父子组件通信

- `props` 父组件 **传参**

| 参数 | 默认值 | 可设置值 |
| ---- | ------ | -------- |
| 无   | 无     | 无       |

- 父组件 **接受参数**

| method                | 接受函数  |
| --------------------- | --------- |
| update  | value: string |
