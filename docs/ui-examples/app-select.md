## App 选择组件 <!-- {docsify-ignore} -->

<div class="app-select">
  <iframe src="http://192.168.50.118:8080/#/app-select"></iframe>
</div>

<script>
  new Vue({
    el: '#main',
    data: { msg: 'Vue' }
  })
</script>

### 注册

在全局中注册或者需要使用的页面注册

- 全局注册

```javascript
import appSelect from "../../components/select";

Vue.component("appSelect", appSelect);
```

- 单页面注册

```javascript
import appSelect from '../../components/select'

components: {
  appSelect
},
```

### 页面中使用

- html 中引入 appSelect 组件

```javascript
<appSelect @update="updateVal"></appSelect>

```

- methods 中引入 updateVal 方法

```javascript
updateVal(value) {
  this.selectValue = value;
}

```

其中`selectValue`为自己定义的接收选择框的值

### 父子组件通信

- `props` 父组件 **传参**

| 参数 | 默认值 | 可设置值 |
| ---- | ------ | -------- |
| 无   | 无     | 无       |

- 父组件 **接受参数**

| 参数                  | 接受函数  |
| --------------------- | --------- |
| selectValue（自定义） | updateVal |
