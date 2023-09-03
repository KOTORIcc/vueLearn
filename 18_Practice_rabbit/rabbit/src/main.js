import { createApp } from 'vue'
import App from './App.vue'
import {getCategory} from './apis/testAPI';
import router from './router/index'
// import '@/styles/common.scss'
//这个函数返回了Promise对象 对其
getCategory().then((res) => { console.log(res) })

createApp(App)
  .use(router)
  // .use(ElementPlus)
  .mount('#app')
