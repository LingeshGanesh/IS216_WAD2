<script setup>
import { ref, onMounted } from "vue";
import axios from "axios";

// Declare props
defineProps(["button_label"]);

// Reactive data
const selected_category = ref("");
const categories = ref([]);
const items = ref([]);

// Emits a 'click' event to notify the parent component when items are added
const emit = defineEmits(["click"]);

// Lifecycle hook: Fetch categories when the component is created
onMounted(async () => {
    try {
        const response = await axios.get("http://localhost:3000/categories");

        categories.value = response.data;
        selected_category.value = categories.value[0];
        getItems();
    } catch (error) {
        console.log(error.message);
    }
});

// Fetch items for the currently selected category
async function getItems() {
    try {
        const response = await axios.get("http://localhost:3000/items", {
            params: {
                category: selected_category.value
            }
        });

        items.value = response.data;

        for (let item of items.value) {
            item.quantity = 0;
        }
    } catch (error) {
        console.log(error.message);
    }
}

// Handle button click to add selected items to the cart
function doClick() {
    let itemsToAdd = [];

    for (let i = 0; i < items.value.length; i++) {
        let item = items.value[i];

        if (item.quantity > 0) {                    // Only include items with quantity > 0
            let clone = Object.assign({}, item);    // Clone the item to avoid mutating original data
            itemsToAdd.push(clone);                 // Add cloned item to the array

            item.quantity = 0;                      // Reset the quantity after adding
            items.value[i] = item;
        }
    }

    emit("click", itemsToAdd);                      // Emit event with selected items to the parent
}
</script>

<template>
    <div>
        <!-- Category selection dropdown -->
        <label for="categories">Categories</label>
        <select class="form-control" id="categories" v-model="selected_category" @change="getItems">

            <option v-for="category in categories">{{ category }}</option>

        </select>
        <br>

        <!-- Display items table if there are items -->
        <div v-if="items.length > 0">

            <table class="table">
                <thead class="table-dark">
                    <tr>
                        <th scope="col">Name</th>
                        <th scope="col">Price</th>
                        <th scope="col">Qty</th>
                        <th scope="col">Sub-Total</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="item in items">
                        <td>{{ item.name }}</td>
                        <td>${{ item.price }}</td>
                        <td>
                            <!-- Input for selecting item quantity -->
                            <input type="number" min="0" v-model.number="item.quantity" style="width:50px;">
                        </td>
                        <td>
                            <!-- Display subtotal for the item -->
                            ${{ (item.price * item.quantity).toFixed(2) }}
                        </td>
                    </tr>
                </tbody>
            </table>

            <!-- Button to add selected items to the cart -->
            <button class="btn btn-primary" @click="doClick">{{ button_label }}</button>
        </div>

        <!-- Display when there are no items -->
        <p v-else>
            No item.
        </p>
    </div>
</template>

<style scoped>
/* Scoped styles for this component (optional) */
</style>
