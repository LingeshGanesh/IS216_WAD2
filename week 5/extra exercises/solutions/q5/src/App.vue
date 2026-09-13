<script setup>
import { ref, computed, onMounted } from 'vue';
import axios from 'axios';

// Reactive data
const timestamp = ref(null);
const message = ref("");
const temperatureList = ref([]);

// Compute the average temperature from all stations
const averageTemperature = computed(() => {
  let total = 0;

  for (const temp of temperatureList.value) {
    total += temp.temperature;
  }

  return total / temperatureList.value.length;
});

// Fetch real-time air temperature data from data.gov.sg
function getTemperature() {
  
  // API endpoint URL
  const url = "https://api-open.data.gov.sg/v2/real-time/api/air-temperature";

  // Send GET request with date_time parameter
  axios.get(url)
    .then(response => {
      const obj = response.data;

      // Create a mapping from station ID to station name
      const station_map = {};
      for (const station of obj.data.stations) {
        station_map[station.id] = station.name;
      }

      // Convert the API timestamp into a Date object, then format it so that
      // the date is displayed in day/month/year order (en-GB) and the time 
      // is shown in 12-hour format with AM/PM (en-US), separated by a space.
      const timestampObj = new Date(obj.data.readings[0].timestamp);
      timestamp.value = timestampObj.toLocaleDateString("en-GB") +
        " " + timestampObj.toLocaleTimeString("en-US");

      // Clear and populate the temperature list
      temperatureList.value = [];

      for (const reading of obj.data.readings[0].data) {
        temperatureList.value.push({
          id: reading.stationId,
          station: station_map[reading.stationId],
          temperature: reading.value
        });
      }
    })
    .catch(error => {
      // Handle errors (e.g., network issues, API errors)
      message.value = "HTTP Error " + error.message;
    });
}

onMounted(() => {
  // Automatically fetch temperature data when component is mounted
  getTemperature();
});
</script>

<template>
  <h1>
    Singapore temperature
  </h1>

  <!-- Display the average temperature, rounded to 2 decimal places -->
  <h2>
    Average: {{ averageTemperature.toFixed(2) }}
  </h2>

  <!-- Show the timestamp of the last data fetch and a Refresh button -->
  <h2>
    {{ timestamp }}
    <button class='btn btn-primary' @click='getTemperature'>Refresh</button>
  </h2>

  <!-- Display any error message returned during data fetch -->
  <p class='text-danger' v-if='message.length > 0'>
    {{ message }}
  </p>

  <!-- Table showing temperature readings from all stations -->
  <table class='table' v-if='temperatureList.length > 0'>
    <thead class='table-dark'>
      <tr>
        <th scope='col'>Station</th>
        <th scope='col'>Temperature</th>
      </tr>
    </thead>
    <tbody>
      <!-- Loop through each item in temperatureList and render a row -->
      <tr v-for="item of temperatureList" :key="item.id">
        <th scope='row'> {{ item.station }} </th>
        <td> {{ item.temperature }} </td>
      </tr>
    </tbody>
  </table>
</template>

<style scoped>
/* Optional styling can go here */
</style>
