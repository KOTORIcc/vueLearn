import { createRouter, createWebHistory } from 'vue-router';
import Login from '../views/Login/index.vue'
import Layout from '../views/Layout/index.vue'
import category from "@/views/Layout/Category/index.vue";
import home from "@/views/Layout/Home/index.vue";
import subCategory from '@/views/Layout/SubCategory/index.vue'
import detail from "@/views/Layout/Detail/index.vue";

const routes = [
  {
    path: '/',
    component: Layout,
    children: [
      {
        path:'category/sub/:id',
        component:subCategory,
      },
      {
        path: 'category/:id',
        component: category,
      },
      {
        path: '',
        component: home
      },
      {
        path: 'detail/:id',
        component: detail,
      }
    ]
  },
  {
    path: '/Login',
    component: Login
  }
]

const router = createRouter({
  routes,
  history: createWebHistory(),
  scrollBehavior(){
    return {
      top: 0
    }
  }
})

export default router
