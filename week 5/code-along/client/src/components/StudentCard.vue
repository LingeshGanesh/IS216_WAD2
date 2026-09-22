<script setup>
    import {computed} from 'vue';
    // define property students
    const props = defineProps({
        student: Object
    })
</script>

<template>
    <div class="card mb-3 shadow">
    <div class="card-body d-flex justify-content-between align-items-center">
        <div class="d-flex align-items-center gap-3">
        <div>
            <h5 class="mb-0">{{ student.name }}</h5>
            <p class="text-muted small mb-0">
            Year {{ student.year }} | GPA: {{ student.gpa.toFixed(2) }}
            </p>
        </div>
        </div>
    </div>
    </div>
</template>