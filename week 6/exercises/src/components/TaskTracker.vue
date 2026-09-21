<script setup>
// TODO: define the props and the emits for the TaskTracker component 
const props = defineProps({
  task: Object,
  idx: Number
})

const emit = defineEmits(['delete'])
</script>

<template>
  <!-- TODO: add/modify your template code here -->
  <div class="card" style="width: 18rem; display: inline-block">
    <div class="card-body">
      <h5 class="card-title">Deadline: {{ task.deadline }}</h5>
      <hr />
      <p class="card-text">{{ task.desc }} </p>
      <button type="button" class="btn btn-primary" @click="emit('delete', idx)">Done</button>
    </div>
  </div>
</template>
