<script setup>
import { ref } from 'vue'
const items = ref(['keyboard', 'mouse', 'iPhone', 'macbook', 'adapter'])

// TODO: Add Code Here
const newItem = ref("")

function addItem(item) {
    items.value.push(item)
}

function removeItem(item) {
  items.value = items.value.filter(x => x !== item)
}

</script>

<template>

    <h2>Shopping Cart</h2>
    <!-- TODO: Add Code Here -->
     <ul>
        <li v-for="item in items":key=item>{{ item }}
            <button v-on:click="removeItem(item)">Delete!</button>
        </li>
     </ul>

     <form>
        <input type="textBox" v-model="newItem"><button type="button" v-on:click="addItem(newItem)">Add!</button>
     </form>

   
</template>
