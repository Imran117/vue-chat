import { createApp } from 'vue'
import App from './App.vue'
import '@/assets/style/main.scss'
const app = createApp(App)

import store from './store/index'
app.use(store)

app.mount('#app')
