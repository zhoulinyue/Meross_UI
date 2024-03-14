<template>
  <div style="display: inline-block">
    <el-select
      style="width: 150px; margin: 0 50px 0 10px"
      v-model="value"
      placeholder="请选择App"
      @change="change"
    >
      <el-option
        v-for="(item, index) in vendorList"
        :key="index"
        :label="item.name"
        :value="item.value"
      >
      </el-option>
    </el-select>
  </div>
</template>

<script>
import { Select, Option } from 'element-ui';
export default {
  name: 'app-select',
  components: {
    'el-select': Select,
    'el-option': Option
  },
  data() {
    return {
      value: '',
      vendorList: [
        { name: 'meross', value: 'meross' },
        { name: 'refoss', value: 'refoss' }
      ]
    };
  },
  methods: {
    // *选择框改变值
    change() {
      this.$emit('update', this.value);
    }
  }
};
</script>