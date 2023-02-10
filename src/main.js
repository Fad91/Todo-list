import { createApp } from 'vue'
import App from './App'
import components from '@/components/interface/index'
import router from '@/router/router'
import '@/styles/main.scss'
import store from '@/store'

const app = createApp(App)

components.forEach(component => {
    app.component(component.name, component)
})

app.use(router).use(store).mount('#app')
