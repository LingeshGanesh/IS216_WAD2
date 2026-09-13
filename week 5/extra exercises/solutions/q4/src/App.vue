<script setup>
import { ref, onMounted } from 'vue';

// Reactive data
const numCoins = ref(1);
const isHeadList = ref([]); // Array storing whether each coin is heads (true) or tails (false)
const count = ref(0);

// Updates the coin array length and optionally flips them
function updateCoins(shouldFlip) {

  // Ensure at least 1 coin is displayed
  if (numCoins.value < 1) numCoins.value = 1;

  // Adjust the coin array length to match numCoins
  isHeadList.value.length = numCoins.value;

  // If shouldFlip is true, randomize heads/tails for each coin
  if (shouldFlip) {
    for (let i = 0; i < numCoins.value; i++) {
      isHeadList.value[i] = Math.random() < 0.5; // true = head, false = tail
      count.value++;
    }
  }
}

// Flips all coins currently displayed.
function flipCoins() {
  updateCoins(true);
}

// Lifecycle hook: runs once when the component is mounted
// Initialize the coin list without flipping them
onMounted(() => {
  updateCoins(false);
});
</script>

<template>
  <div class="p-3">
    <!-- Input for number of coins; @change updates coins without flipping -->
    Number of coins <input type="number" v-model.number="numCoins" min="1" @change="updateCoins(false)">
    
    <!-- Flip button triggers flipping all coins -->
    <button class="btn btn-primary ms-2" @click="flipCoins">Flip</button>
  </div>

  <div class="p-3">
    <!-- Render each coin image based on isHeadList -->
    <template v-for="(isHead, index) in isHeadList" :key="index">
      <img :src="isHead ? 'img/head.png' : 'img/tail.png'">
    </template>
    <br><br>

    <!-- Display total number of flips -->
    Flipped {{ count }} times
  </div>

</template>

<style scoped>
/* Optional styling can go here */
</style>
