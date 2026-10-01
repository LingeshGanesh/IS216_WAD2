<!--
Name:
Email:
-->

<script setup>
import { onMounted, ref } from 'vue'
import axios from 'axios'
import './q4_readonly.css'

const API_URL = 'http://127.0.0.1:8000/api'

const stations = ref([])
const selectedRentStation = ref('')
const selectedReturnStation = ref('')

// Part A
async function getStations() {
    try {
        const response = await axios.get(API_URL);
        console.log(response.data)
        stations.value = response.data
    } catch(error) {
        console.log(error)
    }
}

// Part C and Part D
async function putAction(action, stationId) {
    const target = stations.value.find(station => station.name === stationId)
    const connectionAPI  = API_URL + '/' + target.id
    const toSend = {action: action}
    let resultMsg = ''

    if (action==='rent') {
        resultMsg = 'Bike rented successfully'
    } else {
        resultMsg = 'Bike returned successfully'
    }

    try {
        await axios.put(connectionAPI,toSend)
        alert(resultMsg)
        selectedRentStation.value = ''
        selectedReturnStation.value = ''
    } catch(error) {
        console.log('error')
        console.log(error)
        if (error.response && error.response.status === 400){
            alert('Error renting bike')
        }
    }
    
}

// The following functions are provided.
async function rentBike() {
    if (!selectedRentStation.value) {
        alert('Please select a station')
        return
    }
    console.log('1: '+selectedRentStation.value)
    await putAction('rent', selectedRentStation.value)
    await getStations()
}

async function returnBike() {
    if (!selectedReturnStation.value) {
        alert('Please select a station')
        return
    }

    await putAction('return', selectedReturnStation.value)
    await getStations()
}

// Do not remove the following line.
onMounted(getStations)
</script>

<template>
    <div class="container">
        <h1>City Bike Share</h1>

        <div id="station-list">
            <!-- Part A: Use Vue to display all stations here. -->
             <div v-for="station in stations" class="station-item">
                <h3 style="font-weight: bold;">{{ station.name }}</h3>
                <p>Available Bikes: {{ station.available_bikes }}</p>
                <p>Available Docks: {{ station.available_docks }}</p>
             </div>
        </div>

        <div class="activity-form">
            <div>
                <h2>Rent a Bike</h2>

                <select
                    id="station-select"
                    v-model="selectedRentStation"
                >   
                    <option value="">Select a station</option>

                    <!-- Part B: Use Vue to populate the station options here. -->
                     <option v-for="station in stations" :value="station.name">{{station.name}}</option>
                </select>

                <button
                    id="rent-btn"
                    @click="rentBike"
                >
                    Rent Bike
                </button>
            </div>

            <div>
                <h2>Return a Bike</h2>

                <select
                    id="return-station-select"
                    v-model="selectedReturnStation"
                >
                    <option value="">Select a station</option>

                    <!-- Part B: Use Vue to populate the station options here. -->\
                    <option v-for="station in stations" :value="station.name">{{station.name}}</option>
                </select>

                <button
                    id="return-btn"
                    @click="returnBike"
                >
                    Return Bike
                </button>
            </div>
        </div>
    </div>
</template>