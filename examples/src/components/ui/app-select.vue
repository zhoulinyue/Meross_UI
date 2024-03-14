<template>
  <div style="margin: 20px 0">
    <appSelect @update="updateVal"></appSelect>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selectValue: ''
    };
  },
  methods: {
    updateVal(value) {
      this.selectValue = value;
    }
  }
};
</script>

<style>
</style>