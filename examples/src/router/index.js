// 第一步引入插件(本质是一个构造函数)
import VueRouter from 'vue-router'
 
// 第二步创建router实例对象并暴露
const router = new VueRouter({
  routes: [
    {
      path: '',
      redirect: "/app-select",
    },
    {
      path: '/app-select',
      component: () => import('@/components/ui/app-select.vue'),
    }, {
      path: '/list-template',
      component: () => import('@/components/template/list.vue')
    }
  ]
})
 
export default router