import '@unocss/reset/tailwind-compat.css'
import 'uno.css'
import './styles/main.css'

import { createHead } from '@vueuse/head'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createHead())
app.use(router)
app.mount('#app')
