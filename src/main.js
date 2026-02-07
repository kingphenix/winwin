import { createApp } from 'vue'
import App from './App.vue'
import './styles/index.css'
import i18n from './locales/index.js'

createApp(App).use(i18n).mount('#app')

