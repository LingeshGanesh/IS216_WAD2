<script setup>
import { ref } from "vue";
import TwoLists from "./components/TwoLists.vue";

// Reactive data
const fruits1 = ref(["apple", "orange", "pear", "papaya", "rambutan", "durian"]);
const fruits2 = ref(["starfruit", "jackfruit"]);

const personList1 = ref(["Alfred", "Betty", "Cathy", "Desmond", "Ellen", "Fred", "George", "Hans"]);
const personList2 = ref(["Irene", "Julie", "Katty", "Leonard", "Margaret", "Norman"]);

// Internal reusable methods
function moveLeft(leftList, rightList, selected) {
  for (const item of selected) {
    const i = rightList.value.indexOf(item);
    rightList.value.splice(i, 1);
    leftList.value.push(item);
  }
}

function moveRight(leftList, rightList, selected) {
  for (const item of selected) {
    const i = leftList.value.indexOf(item);
    leftList.value.splice(i, 1);
    rightList.value.push(item);
  }
}

// Handle fruits
function moveFruitsLeft(selected) {
  moveLeft(fruits1, fruits2, selected);
}

function moveFruitsRight(selected) {
  moveRight(fruits1, fruits2, selected);
}

// Handle person lists
function movePersonLeft(selected) {
  moveLeft(personList1, personList2, selected);
}

function movePersonRight(selected) {
  moveRight(personList1, personList2, selected);
}
</script>

<template>
   <h3>Fruits</h3>
   <two-lists size=5 width="500px" left-title='Likes' :left-list='fruits1'
      right-title='Dislikes' :right-list='fruits2' @moveleft="moveFruitsLeft"
      @moveright="moveFruitsRight"></two-lists>

   <h3>People</h3>
   <two-lists size=7 width="500px" left-title='Friends'
      :left-list='personList1' right-title='Acquaintances'
      :right-list='personList2' @moveleft="movePersonLeft"
      @moveright="movePersonRight"></two-lists>
</template>

<style scoped></style>
