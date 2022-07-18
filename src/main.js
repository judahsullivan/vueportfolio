import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'
import { loadFonts } from './plugins/webfontloader'
import './index.css'
import { MotionPlugin } from '@vueuse/motion'
loadFonts()

createApp(App)
  .use(router)
  .use(vuetify)
  .mount('#app')
  .use(MotionPlugin)
