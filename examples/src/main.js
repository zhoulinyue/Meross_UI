import Vue from 'vue'
import App from './App.vue'
import demo from '../../components/demo'
// import demo from '../../dist/meross_ui.umd';
// import '../../dist/meross_ui.css';
Vue.config.productionTip = false

Vue.use(demo);

new Vue({
  render: h => h(App),
}).$mount('#app')
