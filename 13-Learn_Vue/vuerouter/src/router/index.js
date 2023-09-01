import {createRouter ,createWebHistory} from 'vue-router'

// import Home from '../components/Home.vue'
// import About from '../components/about.vue'
// import User from '../components/User.vue'

let routes = [
    {   path:'',
        redirect:'/Home'
    },
    {
        path:'/Home',
        name:'Home',
        // components: Home 没有s！！！！！！！！！！！！！！！自动补全FUCK U
        // component: Home
        //前端路由懒加载方式
        component: () => import('../components/Home.vue'),
        //父路径下注册其子组件的前端路由表
        children:[
            {
                path:'',
                name:'rederict',
                redirect:'/Home/news' //redirect 需要提供一个完整的跳转路径url 与vue2不一样，vue2写的依旧是子组件的相对路径
            },
            {
                path:'news',//子路由不需要写/
                name:'news',
                //子路由子组件也可以进行懒加载
                component:()=>import('../components/HomeNews.vue')
            },
            {
                path:'message',
                name:'message',
                component:()=>import('../components/HomeMessage.vue')
            }
        ],
        //组件内守卫
        beforeEnter: (to, from, next)=>{
            console.log('Home beforeEnter Func');
            next()
        },

    },
    {
        path:'/About',
        name:'About',
        // components: About
        // component: About
        component: () => import('../components/about.vue')

    },
    {//   /User/zhangsan 动态绑定
        path:'/User/:userid',
        name:'User',
        // component: User
        component: () => import('../components/User.vue')

    },
    {
        path: '/Profile',
        name:'Profile',
        component:()=>import('../components/Profile.vue'),
        beforeEnter: (to, from, next)=>{
            console.log('Profile beforeEnter Func');
            next()
        }
    }
]

let router = createRouter({
    history: createWebHistory(),
    routes
})

//全局 导航守卫
//前置守卫guard
//前置钩子hook
router.beforeEach((to, from, next)=>{
    //在有二级路由的页面，to对象中会有matched属性，
    //展示news组件时，to中的matched属性会记录Home/news和Home两个路由的信息
    //为了始终展示上层组件的name或信息，需要添加matched[0]进行限定
    document.title = to.matched[0].name
    // console.log(to);
    next()
})

//后置守卫
// router.afterEach()

export default router


