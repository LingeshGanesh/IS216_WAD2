<script setup>
import axios from 'axios';
import { ref, onMounted } from 'vue'

const slots = ref([]);
const requests = ref([]);

const nameInput = ref('');
const chosenSlot = ref('');


async function loadData() {
    const response = await axios.get('http://localhost:8000/api')
    slots.value = response.data.slots;
    console.log(slots);
    requests.value = response.data.requests;
    console.log(requests);
}

async function newBooking() {
    const newBooking = {
        action: "create",
        name: nameInput.value,
        slot: chosenSlot.value
    }
    console.log(newBooking);
    try {
        await axios.post('http://localhost:8000/api',newBooking)
    } catch (error) {
        console.log(error);
    }

    nameInput.value=''
    chosenSlot.value = ''
    loadData();
}

async function updateStatus(event, requestID) {
    let toChangeTo = '';

    if (event.target.id==="deny"){
        toChangeTo = "denied"
    } else {
        toChangeTo = "approved"
    }

    const updateBooking = {
        action: "update",
        id: requestID,
        status: toChangeTo
    }

    try {
        await axios.post('http://localhost:8000/api',updateBooking)
    } catch (error) {
        console.log(error);
    }

    loadData();
}

onMounted(loadData);
</script>

<template>
    <h1>Study Room Requests</h1>

    <div>
        <label for="nameInput">Your name:</label>
        <input v-model="nameInput" id="nameInput" type="text">

        <label for="chosenSlot">Select a slot:</label>
        <select v-model="chosenSlot" id="chosenSlot">
            <option v-for="slot in slots">{{ slot }}</option>
        </select>

        <button id="createBtn" @click="newBooking">Create</button>
    </div>
    
    <table border="1" cellpadding="6" cellspacing="0" style="margin-top: 12px;">
        <thead>
            <tr>
                <th>Name</th>
                <th>Slot</th>
                <th>Status</th>
                <th>Actions</th>
            </tr>
        </thead>
        <tbody id="tbodyRequests">
            <tr v-for="request in requests" :key="request.id">
                <td>{{ request.name }}</td>
                <td>{{ request.slot }}</td>
                <td>{{ request.status }}</td>
                <td>
                    <button :disabled="request.status === 'approved'" id="approve" @click="updateStatus($event, request.id)">Approve</button>
                    <button :disabled="request.status === 'denied'" id="deny"  @click="updateStatus($event, request.id)">Deny</button>
                </td>
            </tr>
        </tbody>
    </table>
</template>