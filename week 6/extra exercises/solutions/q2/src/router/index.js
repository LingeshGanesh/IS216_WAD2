import { createRouter, createWebHistory } from 'vue-router'
import Temperature from '@/components/Temperature.vue'
import Forecast2Hourly from '@/components/Forecast2Hourly.vue'
import Forecast24Hour from '@/components/Forecast24Hour.vue'
import Forecast4Days from '@/components/Forecast4Days.vue'

const routes = [
  { path: '/', name: 'Temperature', component: Temperature },
  { path: '/2-hourly', name: '2-Hourly', component: Forecast2Hourly },
  { path: '/24-hour', name: '24-Hour', component: Forecast24Hour },
  { path: '/4-days', name: '4-Days', component: Forecast4Days }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
