import { createRouter, createWebHistory, createWebHashHistory } from 'vue-router'
//配置映射关系
const routes = [
  //懒加载 分包的名字可以通过注释来指定 这是webpack的特性 注释的格式不能随便该 必须严格遵守
  { path:'/Home',
    name: 'Home',
    component: () => import(/* webpackChunkName: "Home-Chunk" */'../pages/Home.vue'),
    meta:{//这里定义的所有属性 都可以在this.$route中拿到
      name:'why',
      age: 18,
      height: 188
    },
    children: [
      {
        path: '',
        redirect: '/Home/Message'
      },
      { path: 'Message',
        component: () => import('../pages/HomeMessage.vue')},
      { path: 'Shop',
        component: () => import('../pages/HomeShop.vue')}
    ]
  },
  { path:'/About',
    component: () => import('../pages/About.vue')
  },
  { path: '/User/:userid/id/:id',
    component: () => import('../pages/User.vue'),
  },
  { path:'/',
    redirect: '/Home',
  },
  { path:'/:pathMatch(.*)',//(.*)意思是匹配任意字符的连续序列，也就是说无论输入什么路径都能匹配这个正则 当路径找不到时就会来这里
    // path:'/(.*)'  直接写成这样也是可以的 只是组件取不到params了而已
    component: () => import('../pages/NotFound.vue')
  }
];

//创建一个路由 router
const router = createRouter({
  routes,
  history: createWebHistory()
})

//动态添加路由
const categoryRoute = {
  path: '/category',
  component: () => import('../pages/category.vue')
}

//添加顶级路由对象
router.addRoute(categoryRoute)

//添加二级路由      这里是以name来判断的 所以有必要写一个name
router.addRoute('Home',{
  path: 'Moment',
  component: () => import('../pages/HomeMoment.vue')
})

let counter = 0;
                          //next参数已经不建议使用
router.beforeEach((to, from) => {
  console.log(`第${++counter}次路由跳转`);
  // return false
  //返回值问题:
  //  false 使导航失效
  //  undefined 或不写返回值 正常工作
  //  字符串: 路径 跳转到对应的路径中
  if (to.path === '/About') {
    return '/category'
  }
})

export default router
