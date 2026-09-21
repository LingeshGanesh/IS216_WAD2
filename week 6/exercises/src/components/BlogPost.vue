<script setup>
import { computed } from 'vue'

// TODO: Define the props for the BlogPost component
import angryImg from '@/assets/angry.png'
import happyImg from '@/assets/happy.png'
import sadImg from '@/assets/sad.png'

const props = defineProps({
  subject: String,
  entry: String,
  mood: String,
})
console.log(props.mood)

const moodImg = computed(()=>{
  if (props.mood==='Happy') {
    return happyImg 
  } else if (props.mood==='Sad') {
    return sadImg
  } else {
    return angryImg
  }
})
</script>

<template>
  <!-- TODO: modify your template code here -->
  <div class="card mx-auto" style="width: 24rem">
    <img v-bind:src="moodImg" class="card-img-top" alt="Image cap" />
    <div class="card-body">
      <h5 class="card-title">{{ subject }}</h5>
      <p class="card-text">{{ entry }}</p>
      <hr size="10" noshade />
      <slot></slot>
      <br />
    </div>
  </div>
</template>
