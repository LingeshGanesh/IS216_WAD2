<script setup>
import { ref, onMounted } from "vue";
import axios from "axios";

// Reactive data
const now = ref(new Date());
const message = ref("");
const temperatureList = ref([]);

// Lifecycle hook called when the component is mounted
// Automatically fetches temperature data on component load
onMounted(() => {
  getTemperature();
});

// Fetches temperature data from the Singapore government's API
async function getTemperature() {
  now.value = new Date();

  // Convert the current time to an ISO string format (without milliseconds)
  let nowStr = now.value.toISOString();
  nowStr = nowStr.slice(0, nowStr.indexOf("."));

  const url = "https://api-open.data.gov.sg/v2/real-time/api/air-temperature";

  try {
    // Make GET request to the API with the formatted date-time
    const response = await axios.get(url, {
      params: {
        date_time: nowStr
      }
    });

    const obj = response.data;

    // Create a mapping of station IDs to station names
    const station_map = {};
    // for (const station of obj.metadata.stations) {
    for (const station of obj.data.stations) {
      station_map[station.id] = station.name;
    }

    console.log(station_map)

    // Clear and populate the temperature list
    temperatureList.value = [];

    for (const reading of obj.data.readings[obj.data.readings.length - 1].data) {
      temperatureList.value.push({
        id: reading.stationId,
        station: station_map[reading.stationId],
        temperature: reading.value
      });
    }
  } catch (error) {
    message.value = "HTTP Error " + error.message;
  }
}
</script>

<template>
    <h2>Singapore Temperature</h2>

    <h4>
        <!-- Display current UTC time -->
        {{ now.toLocaleString('en-GB', { timeZone: 'UTC' }) }}

        <!-- Refresh button to re-fetch data -->
        <button class='btn btn-primary' @click='getTemperature'>Refresh</button>
    </h4>

    <!-- Display error message in red if it exists -->
    <p class='text-danger' v-if='message.length > 0'>
        {{ message }}
    </p>

    <!-- Display the temperature data in a table if available -->
    <table class='table' v-if='temperatureList.length > 0'>
        <thead class='table-dark'>
            <tr>
                <th scope='col'>Station</th>
                <th scope='col'>Temperature</th>
            </tr>
        </thead>
        <tbody>
            <!-- Generate table rows dynamically for each station -->
            <tr v-for='item of temperatureList'>
                <th scope='row'> {{ item.station }} </th>
                <td> {{ item.temperature }} </td>
            </tr>
        </tbody>
    </table>
</template>

<style scoped>
/* Scoped styles for this component (optional) */
</style>
