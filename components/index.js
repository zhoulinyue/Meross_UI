// *批量导出所有组件
import demo from "./demo";
import appSelect from "./select";
const components = {
  demo,
  appSelect
};

// 添加 install 方法
// 在vue中调用 Vue.use(组件)将自动调用 install 方法注册所有组件
const install = function (Vue) {
  if (install.installed) return;
  Object.keys(components).forEach((key) => {
    Vue.component(components[key].name, components[key]);
  });
};

// 导出所有组件
export default {
  install
};
