<script setup>
import { ref } from 'vue'

const teamA = ref("Falcons")
const teamB = ref("Tigers")
const scoreA = ref(0)
const scoreB = ref(0)
const step = ref(1) // points added per click
const maxScore = ref(10)

function addA() {
    scoreA.value = Math.min(maxScore.value, scoreA.value + step.value); // so anything above 10 will only display 10
}

function addB() {
    scoreB.value = Math.min(maxScore.value, scoreB.value + step.value);
}

function reset() {
    scoreA.value = 0;
    scoreB.value = 0;
}

</script>

<template>

    <div style="font-family: Arial; max-width: 520px; margin: 24px auto;">
        <h2>Mini Scoreboard</h2>

        <p><strong>{{ teamA }}</strong> vs <strong>{{ teamB }}</strong></p>

        <p>Current: {{ scoreA }} - {{ scoreB }}</p>

        <!-- B. In-template expressions go here -->
        <p>Points left to win: {{scoreA>scoreB?maxScore-scoreA:maxScore-scoreB}}</p>


        <!-- A. Event handlers go here -->
        <div style="display: flex; gap: 12px; margin: 12px 0;">
            <button v-on:click="addA">+ Team A</button>
            <button v-on:click="addB">+ Team B</button>
            <button v-on:click="reset">Reset</button>
        </div>


        <div style="margin-top: 14px;">
            <!-- C. Display winner / status here -->
            <p v-if="scoreA<maxScore && scoreB<maxScore">No winner yet. Keep playing!</p>
            <p v-else-if="scoreA===maxScore && scoreB<maxScore">Winner: FALCONS</p>
            <p v-else-if="scoreA<maxScore && scoreB===maxScore">Winner: TIGERS</p>
            <p v-else>ERROR: PLEASE RESET SCOREBOARD</p>
        </div>


    </div>

</template>

<style scoped>
p,
input {
    font-family: monospace;
}

p {
    white-space: pre;
}
</style>
