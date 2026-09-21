<script setup>
import { ref, computed, onMounted } from "vue";
import axios from "axios";

// Reactive data
const now = ref(new Date());
const forecasts = ref([]);
const message = ref("");

// Current date in YYYY-MM-DD format
const nowDate = computed(() => {
  const nowStr = now.value.toISOString();
  return nowStr.slice(0, 10);
});

// Helper function to extract the time portion from an ISO string (not used here but kept for possible reuse)
function getTimePart(str) {
  return str.slice(11, 16);
}

// Store forecast data into the component's state
function process(obj) {
  forecasts.value = obj.data.records[obj.data.records.length - 1].forecasts;
  console.log(obj.data.records[obj.data.records.length - 1].forecasts)
}

onMounted(async () => {
  try {
    const response = await axios.get("https://api-open.data.gov.sg/v2/real-time/api/four-day-outlook", {
      params: {
        date: nowDate.value
      }
    });

    const obj = response.data;
    process(obj);
  } catch (error) {
    message.value = "HTTP Error " + error.message;
  }
});
</script>

<template>
    <h2>4-Days Forecast</h2>

    <!-- Table to display the 4-day forecast data -->
    <table class='table table-bordered table-striped text-center'>
        <thead>
            <tr>
                <th scope="col" rowspan='2'>Date</th>
                <th scope="col" rowspan='2'>Forecast</th>
                <th scope="col" colspan='2'>Temperature</th>
                <th scope="col" colspan='2'>Humid</th>
                <th scope="col" colspan='3'>Wind</th>
            </tr>
            <tr>
                <td>Low</td>
                <td>High</td>
                <td>Low</td>
                <td>High</td>
                <td>Direction</td>
                <td>Low</td>
                <td>High</td>
            </tr>
        </thead>

        <!-- Render each forecast as a table row -->
        <tbody>
            <tr v-for="forecast of forecasts">
                <th scope='row'>{{ forecast.timestamp.substring(0,10) }}</th>
                <td>{{ forecast.forecast.text }}</td>
                <td>{{ forecast.temperature.low }}</td>
                <td>{{ forecast.temperature.high }}</td>
                <td>{{ forecast.relativeHumidity.low }}</td>
                <td>{{ forecast.relativeHumidity.high }}</td>
                <td>{{ forecast.wind.direction }}</td>
                <td>{{ forecast.wind.speed.low }}</td>
                <td>{{ forecast.wind.speed.high }}</td>
            </tr>
        </tbody>
    </table>

    <!-- Display error messages if any -->
    <p>{{ message }}</p>
</template>

<style scoped>
/* Scoped styles for this component (optional) */
</style>
