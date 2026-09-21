<script setup>
import { ref } from 'vue';
import Weather from "./components/Weather.vue";

const cities = ref(["Singapore", "London", "Beijing", "Washington"]);
</script>

<template>
  <h3>World's Weather</h3>

  <table class="table table-striped">
    <tbody>
      <tr v-for="city in cities" :key="city">
        <td>
          <Weather :city="city"></Weather>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<style scoped></style>
