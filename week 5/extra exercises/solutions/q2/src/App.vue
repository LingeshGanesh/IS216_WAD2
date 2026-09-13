<script setup>
import { ref, computed } from 'vue';

// Reactive data
const sitename = ref("Vue.js Pet Depot");
const product = ref({
  id: 1234,
  title: "Cat Food, 25lb bag",
  description:
    "100 * 25 pound bag of <em>irresistible</em>, organic goodness for your cat.",
  price: 200000,
  image: "img/cat.jpg",
});
const count = ref(0);

// Formats the price into a string with dollar sign, commas, and decimal places (e.g. $2,000.00)
const formattedPrice = computed(() => {
  const totalCents = product.value.price;

  // Validate totalCents is a positive integer
  if (!Number.isInteger(totalCents) || totalCents <= 0) return "";

  // Extract the cents by taking the remainder of totalCents divided by 100
  const cents = totalCents % 100;

  // Get the whole dollar amount by dividing totalCents by 100 and rounding down
  const dollars = Math.floor(totalCents / 100);

  // Format the dollar amount with commas as thousand separators
  // Then concatenate the decimal point and cents
  let formattedAmount = dollars.toLocaleString() + "." + (cents < 10 ? "0" : "") + cents;

  return "$" + formattedAmount;
});

// Determines whether the "Add to Cart" button should be disabled
const isAddDisabled = computed(() => count.value >= 10);

// Adds 1 item to the cart, only if below inventory limit
function add() {
  if (count.value < 10) {
    count.value++;
  }
}
</script>

<template>
  <!-- Header row: site title and shopping cart -->
  <div class="row">
    <div class="col">
      <!-- Site title -->
      <h2>{{ sitename }}</h2>
    </div>

    <div class="col">
      <!-- Shopping cart icon with count -->
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cart-fill"
        viewBox="0 0 16 16">
        <path
          d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
      </svg>
      <!-- Display cart count -->
      {{ count }}
    </div>
  </div>

  <!-- Product display row -->
  <div class="row">
    <!-- Left column: product image -->
    <div class="col">
      <img :src="product.image" style="width: 100%">
    </div>

    <!-- Right column: product info -->
    <div class="col">
      <!-- Product title -->
      <h3>{{ product.title }}</h3>

      <!-- Product description with HTML formatting -->
      <p v-html="product.description"></p>

      <!-- Formatted product price -->
      <p>{{ formattedPrice }}</p>

      <!-- Add to Cart button (disabled when count reaches 10) -->
      <button @click="add" class="btn btn-primary" :disabled="isAddDisabled">
        Add to Cart
      </button>
    </div>
  </div>
</template>

<style scoped>
/* Optional styling can go here */
</style>
