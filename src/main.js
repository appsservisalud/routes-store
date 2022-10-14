



import { createApp } from 'vue'
import App from './App.vue'
import VueSidebarMenu from 'vue-sidebar-menu'

import store from '../src/store/store'
import router from './router'

createApp(App).use(router).use(store).use(VueSidebarMenu).mount('#app')