import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import ContextMenu from '@imengyu/vue3-context-menu'
import '@imengyu/vue3-context-menu/lib/vue3-context-menu.css'
import '@/assets/image/icon/iconfont.css'
import './utils/index'

createApp(App)
  .use(store)
  .use(router)
  .use(ElementPlus)
  .use(ContextMenu)
  .mount('#app')
