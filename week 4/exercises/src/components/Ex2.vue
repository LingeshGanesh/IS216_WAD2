<script setup>
    import { ref } from 'vue'

    // Add code here
    const width = ref('200')
    const height = ref('200')
    const path = ref('/src/assets/me.png')
</script>

<template>

    <!-- Add code here -->
    <img v-bind:src="path" :width="width" :height="height"/>
</template>
