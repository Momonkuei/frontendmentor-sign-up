import './assets/tailwindcss.css'

import { createApp } from 'vue'
import App from './App.vue'

import { createWebHistory, createRouter } from 'vue-router'
import SignUpForm from './components/SignUpForm.vue'
import SuccessTable from './components/SuccessTable.vue'

const routes = [
  { path: '/', component: SignUpForm },
  { path: '/success', component: SuccessTable },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

const app = createApp(App)
app.use(router)
app.mount('#app')
