import { createRouter, createWebHistory } from 'vue-router';
import Login from '../views/Login/index.vue'
import Layout from '../views/Layout/index.vue'
import category from "@/views/Category/index.vue";
import home from "@/views/Home/index.vue";

const routes = [
  {
    path: '/',
    component: Layout,
    children: [
      {
        path: 'category',
        component: category
      },
      {
        path: '',
        component: home
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
  history: createWebHistory()
})

export default router
