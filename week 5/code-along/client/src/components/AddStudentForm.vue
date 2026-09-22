<script setup>
    import {ref} from 'vue';

    const newName = ref('');
    const newYear = ref(1);
    const newGpa = ref("");

    const emit = defineEmits(['addStudent']);
    function submitForm() {
        // throw out this event for parent component to handle
        emit("addStudent", {
            name: newName.value,
            year: newYear.value,
            gpa: newGpa.value
        })
    }
</script>

<template>
    <div class="card mb-4">
        <div class="card-body">
        <h5 class="card-title">New Student</h5>
        <div class="row g-3">
            <div class="col-5">
            <label class="form-label"
                >Name <span class="text-danger">*</span></label
            >
            <input
                v-model.trim="newName"
                type="text"
                class="form-control"
                placeholder="Full name"
            />
            </div>
            <div class="col-3">
            <label class="form-label">Year</label>
            <input
                v-model.number="newYear"
                type="number"
                class="form-control"
                min="1"
                max="4"
                placeholder="1–4"
            />
            </div>
            <div class="col-3">
            <label class="form-label">GPA</label>
            <input
                v-model.number="newGpa"
                type="number"
                class="form-control"
                min="0"
                max="4"
                step="0.01"
                placeholder="0.00–4.00"
            />
            </div>
            <div class="col-1 d-flex align-items-end">
            <!-- TODO 10: Add student when clicked -->
            <button class="btn btn-success w-100" @click="submitForm">
                Add
            </button>
            </div>
        </div>
        </div>
    </div>
</template>