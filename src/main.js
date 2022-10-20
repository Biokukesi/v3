import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import './assets/main.css'
import Swiper from 'swiper';
const app = createApp(App)

app.use(router, BootstrapVue,IconsPlugin, Swiper)
app.mount('#app')
