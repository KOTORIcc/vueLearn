import { createApp } from 'vue'
import App from './04_teleport内置组件/App.vue'
import registerDirectives from "@/03_自定义指令/directives";
import pluginsObject from './plugins/plugin_object'
import plugin_function from "@/plugins/plugin_function";

const app = createApp(App)

//全局自定义指令
// app.directive('focus', {
//   mounted(el, bindings, vnode, preVnode) {
//     console.log('focus mounted');
//     el.focus()
//   }
// })
registerDirectives(app)

//这样写完之后 vue会自动安装这个插件 也就是自动回调插件里的 install函数并且把app传递给install 因此写插件时 这个函数是必须的
app.use(pluginsObject)
// pluginsObject.install(app) 这个会默认在use中执行

//这里用的是一个函数 所以传递进去就会直接执行 约等于install语法糖了
app.use(plugin_function)
app.mount('#app')
