## 列表页面 <!-- {docsify-ignore} -->

`整体布局`：从上到下依次为标题、筛选项区域、表格、分页组件

![logo](../img/list-template.png ":size=700")

### 模版页展示

<div class="list-template">
  <iframe src="http://localhost:8080/#/list-template"></iframe>
</div>

## 使用

使用时`复制模板页`的代码到新页面，根据使用情况修改标题、筛选项和表格数据等。在需要自己`手动修改`的地方均做了`todo 标识`

```html
<template>
  <div
    style="
      padding: 10px 25px;
      background-color: #f1f2f7;
      min-height: calc(100vh - 20px);
    "
  >
    <!-- *标题 + 返回按钮 -->
    <header>
      <el-button
        icon="el-icon-back"
        circle
        style="width: auto; display: inline-block; padding: 10px"
        @click="handleBack"
      ></el-button>
      <!-- todo 根据实际情况修改标题 -->
      <h3
        style="display: inline-block; margin-left: 10px; vertical-align: middle"
      >
        列表标题
      </h3>
    </header>
    <!-- *筛选区 -->
    <div style="margin: 20px 0">
      <!-- todo 根据实际情况使用筛选组件 -->
      <span>筛选项1</span>
      <appSelect @update="updateVal1"></appSelect>
      <span>筛选项2</span>
      <appSelect @update="updateVal2"></appSelect>
      <span>筛选项3</span>
      <appSelect @update="updateVal3"></appSelect>
    </div>
    <!-- *表格 -->
    <el-table :data="list" style="width: 100%" v-loading="loading">
      <!-- todo 根据数据修改prop和label -->
      <el-table-column prop="data1" label="数据列1"></el-table-column>
      <el-table-column prop="data2" label="数据列2"></el-table-column>
      <el-table-column prop="data3" label="数据列3"></el-table-column>
      <el-table-column label="操作列" width="200">
        <template slot-scope="scope">
          <el-button
            @click="handleJumpInfo('detail', scope.row)"
            type="text"
            size="small"
            >查看</el-button
          >
          <el-button
            type="text"
            size="small"
            @click="handleJumpInfo('edit', scope.row)"
            >编辑</el-button
          >
        </template>
      </el-table-column>
    </el-table>
    <!-- *分页组件 -->
    <el-pagination
      v-show="dataTotal"
      @size-change="changeSize"
      @current-change="getData"
      :current-page.sync="query.page"
      :page-sizes="[10, 20, 30]"
      :page-size="query.pageSize"
      layout="sizes, prev, pager, next, total"
      :total="dataTotal"
      style="text-align: left; margin-top: 10px; margin-left: -10px"
    >
    </el-pagination>
  </div>
</template>
```

```javascript
<script>
export default {
  name: 'list-template',
  data() {
    return {
      loading: false, // *表格loading
      list: [],
      dataTotal: 0,
      query: {
        page: 1,
        pageSize: 30
      },
      selectValue1: '',
      selectValue2: '',
      selectValue3: ''
    };
  },
  created() {
    this.getData();
  },
  methods: {
    updateVal1(value) {
      this.selectValue1 = value;
    },
    updateVal2(value) {
      this.selectValue2 = value;
    },
    updateVal3(value) {
      this.selectValue3 = value;
    },
    // *获取表格数据
    getData() {
      this.list = [
        {
          data1: '2024-03-14',
          data2: 'Meross',
          data3: '成都市武侯区天府三街软件园A区'
        },
        {
          data1: '2024-03-14',
          data2: 'Meross',
          data3: '成都市武侯区天府三街软件园A区'
        },
        {
          data1: '2024-03-14',
          data2: 'Refoss',
          data3: '成都市武侯区天府三街软件园A区'
        },
        {
          data1: '2024-03-14',
          data2: 'Refoss',
          data3: '成都市武侯区天府三街软件园A区'
        },
        {
          data1: '2024-03-14',
          data2: 'Refoss',
          data3: '成都市武侯区天府三街软件园A区'
        },
        {
          data1: '2024-03-14',
          data2: 'Refoss',
          data3: '成都市武侯区天府三街软件园A区'
        }
      ]; // todo 实际应用需要自己调接口获取数据
      this.dataTotal = 10;
      this.loading = true;
    },
    changeSize(val) {
      this.query.pageSize = val;
      this.getData();
    },
    // *跳转至详情、编辑等页面
    handleJumpInfo(type, row) {
      let params = {
        type: type,
        row: row
      };
      this.$router.push({
        path: '', // todo 跳转页路由
        query: params
      });
    }
  }
};
</script>
```
