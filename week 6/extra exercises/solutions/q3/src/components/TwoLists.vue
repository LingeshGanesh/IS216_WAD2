<script setup>
import { ref } from "vue";

// Reactive data
const leftSelected = ref([]);
const rightSelected = ref([]);

// Declare props
defineProps(["size", "width", "leftTitle", "leftList", "rightTitle", "rightList"]);

// Declare emitted events
const emit = defineEmits(["moveright", "moveleft"]);

// Move selected items from left to right
function leftToRight() {
  emit("moveright", leftSelected.value);

  // Clear
  leftSelected.value = [];
}

// Move selected items from right to left
function rightToLeft() {
  emit("moveleft", rightSelected.value);

  // Clear
  rightSelected.value = [];
}
</script>

<template>
   <table :style='{ "width": width }'>
      <tbody>
         <tr>
            <td style='width: 40%'>
               <span style='font-weight:bold'>{{ leftTitle }}</span>
               <select :size='size' style='width: 100%' multiple
                  v-model='leftSelected'>
                  <option v-for="item in leftList"> {{ item }} </option>
               </select>
            </td>
            <td style='vertical-align: middle; text-align: center; width: 20%'>
               <button @click='leftToRight()'> &gt;&gt; </button><br>
               <button @click='rightToLeft()'> &lt;&lt; </button><br>
            </td>
            <td style='width: 40%'>
               <span style='font-weight:bold'>{{ rightTitle }}</span>
               <select :size='size' style='width: 100%' multiple
                  v-model='rightSelected'>
                  <option v-for="item in rightList"> {{ item }} </option>
               </select>
            </td>
         </tr>
      </tbody>
   </table>
</template>

<style scoped>
/* Scoped styles for this component (optional) */
</style>
