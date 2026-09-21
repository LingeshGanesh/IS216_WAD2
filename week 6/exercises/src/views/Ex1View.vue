<script setup>
// TODO: Import the SoundIcon component
import SoundIcon from '../components/SoundIcon.vue'

import { ref } from 'vue'

const soundLevel = ref(0)
</script>

<template>
  Sound level
  <input type="number" min="0" max="3" v-model="soundLevel" />
  <!-- TODO: Add Code Here to make use of the SoundIcon component -->
  <SoundIcon v-bind:level="soundLevel"></SoundIcon>

</template>
