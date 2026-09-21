<script setup>
import { ref, computed, onMounted } from "vue";
import axios from "axios";

// Reactive data
const now = ref(new Date());
const timeslots = ref([]);
const forecasts = ref({});
const message = ref("");

// Current date in YYYY-MM-DD format
const nowDate = computed(() => {
  const nowStr = now.value.toISOString();
  return nowStr.slice(0, 10);
});

// API call to fetch 2-hour weather forecast data
onMounted(async () => {
  try {
    const response = await axios.get("https://api-open.data.gov.sg/v2/real-time/api/two-hr-forecast", {
      params: {
        date: nowDate.value
      }
    });

    const data = response.data;

    // Iterate over each forecast item (time interval)
    for (let i = 0; i < data.data.items.length; i++) {
      const item = data.data.items[i];

      // Extract start time of this forecast interval (HH:mm)
      const start = item.valid_period.start.substr(11, 5);

      // Avoid duplicate timeslots if same start time appears consecutively
      if (i + 1 < data.data.items.length) {
        const next_start = data.data.items[i + 1].valid_period.start.substr(11, 5);
        if (start === next_start) continue;
      }

      // Extract end time (HH:mm)
      const end = item.valid_period.end.substr(11, 5);

      // Add to timeslots array
      timeslots.value.push({ start, end });

      // Loop through each area forecast within the time slot
      for (const area_forecast of item.forecasts) {
        const area = area_forecast.area;
        const forecast = {
          forecast: area_forecast.forecast,
          skip: false,
          span: 1
        };

        // Normalize forecast text
        if (forecast.forecast.includes("Partly Cloudy")) {
          forecast.forecast = "Partly Cloudy";
        }

        // Add forecast to corresponding area in the forecasts object
        if (forecasts.value[area]) {
          forecasts.value[area].push(forecast);
        } else {
          forecasts.value[area] = [forecast];
        }
      }
    }

    // Reverse the timeslots so that the latest one appears first
    timeslots.value.reverse();

    // Post-processing: merge adjacent same forecasts and set span/skip
    for (const area in forecasts.value) {
      forecasts.value[area].reverse();

      const area_forecasts = forecasts.value[area];

      for (let i = 0; i < area_forecasts.length; i++) {
        const forecast_i = area_forecasts[i];

        let j = i + 1;

        // Check if consecutive forecasts are the same, merge them
        while (j < area_forecasts.length &&
          forecast_i.forecast === area_forecasts[j].forecast) {

            forecast_i.span++;
            area_forecasts[j].skip = true;
            j++;
        }
      }
    }
  } catch (error) {
    message.value = "HTTP Error " + error.message;
  }
});
</script>

<template>
    <h2>2 Hourly Forecasts ({{ nowDate }})</h2>

    <!-- Scrollable table container -->
    <div class="overflow-scroll" style="max-width: 100%; max-height:480px;">
        <table class="table table-bordered table-striped text-center">
            <thead>
                <tr>
                    <th scope="col">Start of 2-hour </th>

                    <!-- Generate a column header for each timeslot -->
                    <th scope="col" v-for="(slot, index) in timeslots" :key="index">
                        {{ slot.start }}
                        <template v-if="index === 0">
                            to {{ slot.end }}
                        </template>
                    </th>
                </tr>
            </thead>
            <tbody>
                <!-- Loop through each area (e.g., Ang Mo Kio, Changi) -->
                <tr v-for="(area_forecasts, area) in forecasts">
                    <th scope="row">{{ area }}</th>

                    <!-- Loop through forecasts for this area -->
                    <template v-for="(forecast, index) in area_forecasts" :key="index">
                        
                        <!-- Render cell only if not marked to skip -->
                        <td v-if="!forecast.skip" :colspan="forecast.span">
                            {{ forecast.forecast }}
                        </td>
                    </template>
                </tr>
            </tbody>
        </table>
    </div>

    <div>{{ message }}</div>
</template>

<style scoped>
/* Scoped styles for this component (optional) */
</style>
