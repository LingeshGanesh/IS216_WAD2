<script setup>
import TopMenu from './components/TopMenu.vue'

const menuitems = [
    { label: 'Temperature', to: '/' },
    { label: '2-Hourly', to: '/2-hourly' },
    { label: '24-Hour', to: '/24-hour' },
    { label: '4-Days', to: '/4-days' }
]
</script>

<template>
  <TopMenu :menuitems="menuitems" />
  <br>
  <RouterView />
</template>
