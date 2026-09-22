<script setup>
import {computed} from 'vue';
// define property students
const props = defineProps({
    studentsList: Array
})
// ── Computed properties ────────────────────────────────────────────
// TODO 4a studentCount
const studentCount = computed(() => props.studentsList.length);

// TODO 4b honourCount ( number of students with gpa>=3.5 )
const honourCount = computed(() => props.studentsList.filter(s => s.gpa >= 3.5).length);

</script>

<template>    
    <div class="row mb-4 d-flex justify-content-center">
      <div class="col-4">
        <div class="card p-3">
          <!-- TODO 5: Show student count -->
          <div class="display-4 fw-bold text-primary">{{ studentCount }}</div>
          <div class="text-muted">Total Students</div>
        </div>
      </div>
      <div class="col-4">
        <div class="card p-3">
          <!-- TODO 6: Show honour count -->
          <div class="display-4 fw-bold text-warning">{{ honourCount }}</div>
          <div class="text-muted">Honour Roll (GPA ≥ 3.5)</div>
        </div>
      </div>
    </div>
</template>