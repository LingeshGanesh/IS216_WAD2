<script setup>
import { ref } from "vue";
import axios from "axios";
import ItemsBrowser from "./components/ItemsBrowser.vue";
import ShoppingCart from "./components/ShoppingCart.vue";

// Reactive data
const cartItems = ref([]);
const receipt = ref(null);

// Add selected items to cart
function addToCart(itemsToAdd) {
  for (const item of itemsToAdd) {
    let found = false;

    for (const cartItem of cartItems.value) {
      if (item.id == cartItem.id) {
        found = true;
        cartItem.quantity += item.quantity;
        break;
      }
    }

    if (!found) cartItems.value.push(item);
  }
}

// Checkout cart items
async function checkout() {
    try {
      const response = await axios.post("http://localhost:3000/checkout", {
        cart: cartItems.value,
      })

      receipt.value = response.data;
      cartItems.value = [];

    } catch (error) {
      console.log(error.message)
    }
}

// Continue shopping
function buyMore() {
  receipt.value = null;
}
</script>

<template>
  <div class="row p-3" v-if='receipt === null'>
    <div class='col-md-6 text-center'>
      <ItemsBrowser button_label="Add to Cart" @click='addToCart'></ItemsBrowser>
    </div>
    <div class='col-md-6 text-center'>
      <br>
      <ShoppingCart button_label="Checkout" :cart_items='cartItems' @click='checkout'>
        </ShoppingCart>
    </div>
  </div>

  <div class="row p-3" v-else>
    <div class='col text-start text-info'>
      <h3>
        ReceiptID: {{ receipt.receiptID }}
      </h3>
      Total: ${{ receipt.total.toFixed(2) }}<br>
      <ul>
        <li v-for='receiptItem in receipt.cart'>
          {{ receiptItem.name }} x {{ receiptItem.quantity }}
        </li>
      </ul>
      <button class='btn btn-primary' @click='buyMore'>Buy more</button>
    </div>

  </div>
</template>

<style scoped></style>
