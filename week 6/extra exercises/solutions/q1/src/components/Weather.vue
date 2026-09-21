<script setup>
// Import axios for making HTTP requests
import axios from "axios";
import { ref, onMounted } from "vue";

// Declare the 'city' prop that this component expects from its parent
const props = defineProps({
  city: String
});

// Local component data
const message = ref("Unknown");

// Convert temperature from Kelvin to Celsius (rounded)
function convert(kel) {
  return Math.round(kel - 273.15);
}

// Lifecycle hook called after the component is mounted
onMounted(async () => {
  const myapikey = "REPLACE WITH YOUR API KEY";
  const url = "https://api.openweathermap.org/data/2.5/weather";

  try {
    // Make a GET request to the OpenWeatherMap API with the given city and API key
    const response = await axios.get(url, {
      params: {
        q: props.city,
        appid: myapikey
      }
    });

    const obj = response.data;

    // Extract weather description and capitalize the first letter
    let desc = obj.weather[0].description;
    desc = desc[0].toUpperCase() + desc.slice(1);

    // Get temperature and convert from Kelvin to Celsius
    const temp = convert(obj.main.temp);

    // Get humidity and wind speed
    const humid = obj.main.humidity;
    const wind = obj.wind.speed;

    // Update the message to display full weather details
    message.value = `${desc}, ${temp} °C, ${humid}% humidity, wind ${wind}m/s.`;
  } catch (error) {
    message.value = "HTTP Error " + error.message;
  }
});
</script>

<template>
    <!-- Display the city name in bold, followed by the weather message -->
    <span style="font-weight: bold;">{{ city }}</span> {{ message }}
</template>

<style scoped>
/* Scoped styles for this component (optional) */
</style>
