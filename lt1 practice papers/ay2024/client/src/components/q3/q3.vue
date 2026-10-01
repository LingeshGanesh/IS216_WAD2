<!--
Name: Lingesh S/O Ganesh
Email: lingesh.g.2025@computing.smu.edu.sg
-->

<script setup>
import { ref } from 'vue'
import './q3_readonly.css'

const logs = ref([])
const maxLogs = 10
const errorMsg = ref('')
const bulbColor = ref('white')
const toggleDisabled = ref(false)

// Part C
function addLog(newLog) {
    logs.value.push('User interacts')
    if (newLog==='yellow') {
        logs.value.push('ON.')
        logs.value.push('Bulb lights up.')
    } else {
        logs.value.push('OFF.')
        logs.value.push('Bulb turns off.')
    }
}

// Part E
function halveLogs() {
    if (logs.value.length>1){
        const toClear = Math.floor(logs.value.length/2)
        console.log('clearing oldest ' + toClear + ' logs')
        logs.value.splice(0, toClear)
        errorMsg.value = ''
    } else {
        errorMsg.value = 'Not enough logs to remove'
    }
}

function changeColor() {
    if (toggleDisabled.value) {
        return
    }

    // Part D: Debug the condition below.
    if (logs.value.length > maxLogs) {
        errorMsg.value = 'Clear some logs before proceeding'
        return
    }

    // Part A
    // Add code here to toggle bulbColor between 'white' and 'yellow'.
    if (bulbColor.value === 'white') {
        bulbColor.value = 'yellow'
        addLog(bulbColor.value)
    } else {
        bulbColor.value = 'white'
        addLog(bulbColor.value)
    }
        
    // Part F
    // Add code here to clear any existing error message.
    if (errorMsg.value!=='') {
        errorMsg.value = ''
    }

    delayButton()

}

// Part B
function delayButton() {
    const delay = 1000
    function callBack () {
        toggleDisabled.value = false;
    }
    setTimeout(callBack, delay)
    toggleDisabled.value = true;
}
</script>

<template>
    <div class="container">
        <div id="colorBox">
            <svg class="lightbulb" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
                <ellipse
                    id="bulb"
                    class="bulb"
                    cx="32"
                    cy="18"
                    rx="25"
                    ry="30"
                    :style="{ fill: bulbColor }"
                />
                <rect class="base" x="24" y="48" width="16" height="10"/>
                <rect class="base" x="22" y="56" width="20" height="10"/>
            </svg>

            <button
                id="toggleButton"
                :disabled="toggleDisabled"
                @click="changeColor();"
            >
                Toggle bulb
            </button>
        </div>

        <div id="textBox">
            <h2>Logs</h2>

            <ol id="logs">
                <li
                    v-for="(log, index) in logs"
                    :key="index"
                >
                    {{ log }}
                </li>
            </ol>

            <button
                id="halveLogButton"
                @click="halveLogs"
            >
                Clear half of logs
            </button>

            <div id="errorMsg">{{ errorMsg }}</div>
        </div>
    </div>
</template>
