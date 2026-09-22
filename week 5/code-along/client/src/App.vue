<script setup>
// ════════════════════════════════════════════════════════════════════
//  IS216 Week 5 — Code-Along: Student Registry  [SOLUTION]
// ════════════════════════════════════════════════════════════════════

// TODO 1 import ref, computed, onMounted
import { ref, computed, onMounted } from "vue";

// TODO 2 import axios
import axios from "axios";

import StatsBar from './components/StatsBar.vue'
import StudentCard from './components/StudentCard.vue'
import AddStudentForm from './components/AddStudentForm.vue'

const BASE_URL = "http://localhost:8000";

// ── Reactive data ──────────────────────────────────────────────────
// TODO 3 declare reactive variables 
// students: [
// { "id": 1, "name": "Alex Tan",    "year": 2, "gpa": 3.75 },
// { "id": 2, "name": "Bernice Lim", "year": 3, "gpa": 3.90 },
// { "id": 3, "name": "Charlie Wong","year": 1, "gpa": 2.85 }]
// message, showForm, newName, newYear, newGpa
const students = ref([
  { "id": 1, "name": "Alex Tan",    "year": 2, "gpa": 3.75 },
  { "id": 2, "name": "Bernice Lim", "year": 3, "gpa": 3.90 },
  { "id": 3, "name": "Charlie Wong","year": 1, "gpa": 2.85 }]);
const message = ref("");
const showForm = ref(false);




// ── Lifecycle hook ─────────────────────────────────────────────────

onMounted(async () => {
  await fetchStudents();
});

// ── Methods ────────────────────────────────────────────────────────
//TODO 10: Fetch students data from server using backend service
async function fetchStudents() {
  try {
    const response = await axios.get(`${BASE_URL}/students`);
    students.value = response.data;
  } catch (error) {
    message.value = "Error loading students: " + error.message;
  }
}

// TODO 11: Use backend service to add new student
async function addStudent(data) {
  if (!data.name.trim()) {
    message.value = "Name is required.";
    return;
  }
  try {
    const response = await axios.post(`${BASE_URL}/students`,data);
    students.value.push(response.data);
    showForm.value = false;
    message.value = "Student added!";
  } catch (error) {
    message.value = "Error adding student: " + error.message;
  }
}

function clearMessage() {
  message.value = "";
}
</script>

<template>
  <div class="container py-4">
    <!-- ── Header ──────────────────────────────────────────── -->
    <h1 class="mb-4">🎓 Student Registry</h1>

    <div
      v-if="message"
      class="alert alert-info d-flex justify-content-between align-items-center mb-4"
    >
      {{ message }}
      <button class="btn-close" @click="clearMessage()"></button>
    </div>

    <!-- STATSBAR -->
    <StatsBar :students-list="students"></StatsBar>

    <!-- TODO 7: @click toggle + ternary label -->
    <div class="col-2 text-start mb-3">
      <button class="btn btn-primary" @click="showForm = !showForm">
        {{ showForm ? "✕ Cancel" : "＋ New student" }}
      </button>
    </div>


    <!-- ── TODO 9: Show Student form (if showForm is true) ─────── -->
    <AddStudentForm v-if="showForm" @add-student="addStudent"></AddStudentForm>
    <!--TODO 8: Show students' details as cards -->
    <StudentCard v-for="stud in students" :key="stud.id" :student="stud"></StudentCard>

  </div>
</template>
