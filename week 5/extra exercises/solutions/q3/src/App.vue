<script setup>
import { ref, computed } from 'vue';

// Reactive data
const sentence = ref("We love Bootstrap! We love Vue.js! ");
const colors = ref(["red", "orange", "green"]);

// Computed property to split the sentence into words
const words = computed(() =>
  sentence.value.trim().split(" ")
);
</script>

<template>
  <!-- Input field for user to type or edit the sentence -->
  Sentence <input type="text" v-model="sentence" style="width: 300px">
  <br>

  <!-- Loop through each word and display with dynamic style -->
  <span v-for="(word, index) in words" :key="index">
    <span :style="{
      // Assign color from the colors array based on word index
      color: colors[index % colors.length],
      // Underline every second word (1-based index)
      textDecoration: (index % 2 === 1) ? 'underline' : 'none'
    }">
      {{ word }}
    </span>
    &nbsp; <!-- Add space between words -->
  </span>
</template>

<style scoped>
/* Optional styling can go here */
</style>
