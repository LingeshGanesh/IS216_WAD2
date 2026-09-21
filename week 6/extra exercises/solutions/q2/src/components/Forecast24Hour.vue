<script setup>
import { ref, computed, onMounted } from "vue";
import axios from "axios";

// Reactive data
const now = ref(new Date());
const overall_forecast = ref("");
const parameters = ref([]);
const period_details = ref([]);
const message = ref("");

// Current date in YYYY-MM-DD format
const nowDate = computed(() => {
  const nowStr = now.value.toISOString();
  return nowStr.slice(0, 10);
});

// Extract HH:mm portion from ISO date-time string
function getTimePart(str) {
  return str.slice(11, 16);
}

// Process the API response and populate component data
function process(obj) {
  // Use the latest update in the items array
  const latestUpdate = obj.data.records[obj.data.records.length - 1];
  const general = latestUpdate.general;
  
  // Set overall forecast description
  overall_forecast.value = general.forecast.text;

  // Build the parameters array (Humidity, Temperature, Wind Speed)
  parameters.value = [
    {
      name: "Humidity",
      low: general.relativeHumidity.low,
      high: general.relativeHumidity.high
    },
    {
      name: "Temperature",
      low: general.temperature.low,
      high: general.temperature.high
    },
    {
      name: `Wind Speed(${general.wind.direction})`,
      low: general.wind.speed.low,
      high: general.wind.speed.high
    }
  ];

  // Populate region-wise forecast details for each time period
  period_details.value = [];
  
  for (const period of latestUpdate.periods) {
    period_details.value.push({
      start: period.timePeriod.start,
      end: period.timePeriod.end,
      north: period.regions.north.text,
      south: period.regions.south.text,
      east: period.regions.east.text,
      west: period.regions.west.text,
      central: period.regions.central.text
    });
  }
}

onMounted(async () => {
  try {
    const response = await axios.get("https://api-open.data.gov.sg/v2/real-time/api/twenty-four-hr-forecast", {
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
    <h2 id="heading">24-Hour Forecast ({{ nowDate }})</h2>
    <h4 id="forecast">Overall Forecast: {{ overall_forecast }}</h4>

    <!-- Table for general weather parameters (temperature, humidity, wind) -->
    <table class='table table-bordered'>
        <thead>
            <tr>
                <th scope="col"></th>
                <th scope="col">Low</th>
                <th scope="col">High</th>
            </tr>
        </thead>
        <tbody>
            <!-- Loop through each parameter and display its low/high values -->
            <tr v-for="parameter of parameters">
                <th scope='row'>{{ parameter.name }}</th>
                <td>{{ parameter.low }}</td>
                <td>{{ parameter.high }}</td>
            </tr>
        </tbody>
    </table>

    <!-- Table for regional weather forecasts by time period -->
    <table class='table table-bordered'>
        <thead>
            <tr>
                <th scope="col">Start</th>
                <th scope="col">End</th>
                <th scope="col">North</th>
                <th scope="col">South</th>
                <th scope="col">East</th>
                <th scope="col">West</th>
                <th scope="col">Central</th>
            </tr>
        </thead>
        <tbody>
            <!-- Loop through each time period and display forecasts for all regions -->
            <tr v-for="details of period_details">
                <th scope='row'>{{ details.start }}</th>
                <th scope='row'>{{ details.end }}</th>
                <td>{{ details.north }}</td>
                <td>{{ details.south }}</td>
                <td>{{ details.east }}</td>
                <td>{{ details.west }}</td>
                <td>{{ details.central }}</td>
            </tr>
        </tbody>
    </table>
    <p>{{ message }}</p>
</template>

<style scoped>
/* Scoped styles for this component (optional) */
</style>
