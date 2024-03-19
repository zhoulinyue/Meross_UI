import Vue from 'vue'
import App from './App.vue'
import demo from '../../components/demo'
import { Button, Table, TableColumn, Pagination } from 'element-ui';
import appSelect from '../../components/appSelect'
import VueRouter from 'vue-router'

import router from './router'
// import demo from '../../dist/meross_ui.umd';
// import '../../dist/meross_ui.css';
Vue.config.productionTip = false

Vue.use(VueRouter)

Vue.use(demo);
Vue.use(Table);
Vue.use(Button);
Vue.use(TableColumn);
Vue.use(Pagination);
Vue.component('appSelect', appSelect);

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
