<script setup>
    import { ref } from 'vue'

    // Add code here
    // challenge: use array  
    const message = ref('Choose your favorite fruit')

    //const fruit1 = ref('apple')
    //const fruit2 = ref('orange')
    //const fruit3 = ref('peach')
    const fruits = ['apple', 'orange', 'peach']
    
</script>

<template>
    {{ message }} 
   
    <!-- <label for="fruit1"> <input type="radio" name="fruit"> {{ fruit1 }} </label> 
    <label for="fruit2"> <input type="radio" name="fruit"> {{ fruit2 }} </label> 
    <label for="fruit3"><input type="radio" name="fruit"> {{ fruit3 }} </label>  -->
    <label v-for="fruit in fruits" :key="fruit">
        <input type="radio" name="fruit" value="fruit">{{fruit}}
    </label>
    
</template>

<style scoped>
</style>
