<script setup>
import { ref, computed } from 'vue';

// Reactive data
const animals = ref(["🐖", "🐓", "🐄", "🐑"]);
const animal = ref(undefined);
const farm = ref([]);

// Computed property that returns two different random animals each time it's accessed
const today_animals = computed(() => {
  const arr = [];

  // Select first random index (animal)
  const i = Math.floor(Math.random() * animals.value.length);
  arr.push(animals.value[i]);

  // Select a different random index (animal)
  let j;
  do {
    j = Math.floor(Math.random() * animals.value.length);
  } while (i === j);

  arr.push(animals.value[j]);
  return arr;
});

// Add the selected animal to the farm array
function addToFarm() {
  farm.value.push(animal.value);
}
</script>

<template>
  <h2>Today's animals</h2>

  <!-- Display radio buttons for today's randomly selected animals -->
  <div v-for="item of today_animals">
    <label>
      <!-- Bind each radio button to the selected animal -->
      <input type="radio" v-model="animal" :value="item" /> {{ item }}
    </label>
  </div>
  <br>

  <!-- Button to add the selected animal to the farm -->
  <input type="submit" value="Add to Farm" @click.prevent="addToFarm" />
  <br><br>

  <!-- Display the list of animals currently in the farm if the length is > 0 -->
  <div v-if="farm.length > 0">
    <p>Your farm is composed by {{ farm.join(" ") }}</p>
  </div>

</template>

<style scoped>
/* Scoped styles can go here */
</style>
