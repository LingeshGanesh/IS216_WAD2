<script setup>
    import { ref } from 'vue'

    // Add code here
    // part 1
    const id = ref('demo')
    const blueBox = ref(true)
    const blueBtn = ref(true)

    // part 2
    const id2 = ref('demo2')
    const activeColor = ref('red')
    const redBtn = ref(true)

    // implement methods below 
    // part 1
    function changeColor() {
        if (blueBox.value) {
            blueBox.value = false
            blueBtn.value = false
        } else {
            blueBox.value = true
            blueBtn.value = true
        }
    }

    // part 2
    function changeTextColor() {
        if (activeColor.value == "blue") {
            activeColor.value = "red"
            redBtn.value = true
        } else { 
            activeColor.value = "blue"
            redBtn.value = false
        }
    }

</script>

<template>
    
    <!-- Add/Modify code here -->
    <!-- note: need to use single quotes '' for classes such as btn-primary which contains '-' signs
                because '-' is a minus operator for (Vue) JavaScript  -->
    <div id="part1">
        <div v-bind:class="{'blueBox': blueBox, 'redBox': !blueBox}">
            div ID : {{id}} 
        </div>
        
        <button type="button" v-bind:class="{'btn': true, 'btn-primary': blueBtn}" v-on:click="changeColor">Change Color</button>
    </div>

    <div id="part2">
        <div v-bind:style="{'color': activeColor}">
            div ID : {{id2}} 
        </div>
       
        <button type="button" v-on:click="changeTextColor">Change Text Color</button> 
    </div>

</template>

<style scoped>
    .redBox {
            background-color: red;
    }
    .blueBox {
        background-color: blue;
    }
    #demo {
        color: white;
    }
</style>
