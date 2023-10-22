import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index'
import { createPinia } from "pinia";
import {registerDirectives} from "@/directives";
import {registerGlobalComponents} from "@/components";
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate';

const app = createApp(App)
const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)
registerDirectives(app)
registerGlobalComponents(app)
app.use(pinia)
app.use(router)
  // .use(ElementPlus)
app.mount('#app')
