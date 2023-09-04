import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index'
import { createPinia } from "pinia";
import {registerDirectives} from "@/directives";

const app = createApp(App)
registerDirectives(app)
app.use(createPinia())
app.use(router)
  // .use(ElementPlus)
app.mount('#app')
