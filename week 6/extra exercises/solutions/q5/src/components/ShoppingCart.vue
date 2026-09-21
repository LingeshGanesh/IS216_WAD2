<script setup>
import { computed } from "vue";

// Declare props
const props = defineProps(["button_label", "cart_items"]);

// Declare emitted events
const emit = defineEmits(["click"]);

// Calculates the total price of all items in the cart
const cartTotalPrice = computed(() => {
  let total = 0;

  for (let cartItem of props.cart_items) {
    total += cartItem.price * cartItem.quantity;
  }

  return total;
});

// Emits a click event to trigger checkout in the parent component
function doClick() {
  emit("click");
}
</script>

<template>
  <div>
    <h3>Cart</h3>

    <!-- Table displaying cart contents -->
    <table class='table table-dark'>
      <thead>
        <tr>
          <th scope='col'>Name</th>
          <th scope='col'>Price</th>
          <th scope='col'>Qty</th>
          <th scope='col'>Sub-Total</th>
        </tr>
      </thead>
      <tbody>

        <!-- Render each item in the cart -->
        <tr v-for='cartItem in cart_items'>
          <td>{{ cartItem.name }}</td>
          <td>${{ cartItem.price }}</td>
          <td>{{ cartItem.quantity }}</td>
          <td>{{ (cartItem.price * cartItem.quantity).toFixed(2) }}</td>
        </tr>
      </tbody>
    </table>

    <!-- Display the computed total -->
    <p class='text-info'>
      Total ${{ cartTotalPrice.toFixed(2) }}
    </p>

    <!-- Checkout button, only shown if cart is not empty -->
    <button v-if='cart_items.length > 0' class='btn btn-primary' @click='doClick'>
      {{ button_label }}
    </button>
  </div>
</template>

<style scoped>
/* Scoped styles for this component (optional) */
</style>
