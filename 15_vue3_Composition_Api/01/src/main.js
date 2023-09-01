import { createApp } from 'vue'
import App from './08_setup顶层编写方式/App.vue'

const app = createApp(App)
//mixin 全局注册 这样每个vue组件内都会有这些参数
// app.mixin({
//   data(){
//     return{
//
//     }
//   },
//   created(){
//     console.log('mixin log message');
//   },
//   methods:{
//     mixinBar(){
//       console.log('minxIn methods here');
//     }
//   }
// })
app.mount('#app')
