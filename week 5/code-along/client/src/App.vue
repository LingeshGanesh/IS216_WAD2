<script setup>
// ════════════════════════════════════════════════════════════════════
//  IS216 Week 5 — Code-Along: Student Registry  [SOLUTION]
// ════════════════════════════════════════════════════════════════════

// TODO 1 import ref, computed, onMounted
import {ref, computed, onMounted} from 'vue';

// TODO 2 import axios
import axios from 'axios';

const BASE_URL = "http://localhost:8000";

// ── Reactive data ──────────────────────────────────────────────────
// TODO 3 declare reactive variables 
//const students = ref ([
 //{ "id": 1, "name": "Alex Tan",    "year": 2, "gpa": 3.75 },
 //{ "id": 2, "name": "Bernice Lim", "year": 3, "gpa": 3.90 },
 //{ "id": 3, "name": "Charlie Wong","year": 1, "gpa": 2.85 }]);
// message, showForm, newName, newYear, newGpa
const students = ref([]);
const message = ref("");
const showForm = ref(false);
const newName = ref("");
const newYear = ref(1);
const newGpa = ref("");


// ── Computed properties ────────────────────────────────────────────
// TODO 4a studentCount
const studentCount = computed(()=>students.value.length)
// TODO 4b honourCount ( number of students with gpa>=3.5 )
//const honourCount = computed(()=>{
//  let honourStudents  = [];
//  for (let student of students.value){
//    if (student.gpa>=3.5){
//      honourStudents.push(student)
//    }
//  }
//  return honourStudents.length;
//});
const honourCount = computed(()=>students.value.filter(elem=>elem.gpa>=3.5).length)

// ── Lifecycle hook ─────────────────────────────────────────────────
onMounted(async () => {
  console.log("startup successful")
  await fetchStudents();
});

// ── Methods ────────────────────────────────────────────────────────
//TODO 10: Fetch students data from server using backend service
async function fetchStudents() {
  try{
    const response = await axios.get(`${BASE_URL}/students`)
    console.log(response.data)
    students.value = response.data
    console.log("student data loaded")
  } catch (error){
    console.log("error loading data")
    console.log(error)
  }
}

// TODO 11: Use backend service to add new student
async function addStudent() {
  try {
    const newStudent = {
      name: newName.value,
      year: newYear.value,
      gpa: newGpa.value
    }
    console.log(newStudent)
    const response = await axios.post(`${BASE_URL}/students`, newStudent)
    students.value.push(response.data);
    console.log("student added succesfully")
  } catch (error) {
    console.log("error adding student")
    console.log(error)
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

    <!-- ── Stats row ─────────────────── -->
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

    <!-- TODO 7: @click toggle + ternary label -->
    <div class="col-2 text-start mb-3">
      <button class="btn btn-primary" @click="showForm=!showForm">
        {{ showForm ? "✕ Cancel" : "＋ New student" }}
      </button>
    </div>

    <!-- ── TODO 9: Show Student form (if showForm is true) ─────── -->
    <div class="card mb-4" v-if="showForm">
      <div class="card-body">
        <h5 class="card-title">New Student</h5>
        <div class="row g-3">
          <div class="col-5">
            <label class="form-label"
              >Name <span class="text-danger">*</span></label
            >
            <input
              v-model="newName"
              type="text"
              class="form-control"
              placeholder="Full name"
            />
          </div>
          <div class="col-3">
            <label class="form-label">Year</label>
            <input
              v-model.number = "newYear"
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
            <button class="btn btn-success w-100" v-on:click="addStudent">
              Add
            </button>
          </div>
        </div>
      </div>
    </div>
    <!--TODO 8: Show students' details as cards -->
    <div
        v-for="student in students":key="student.id"
        class="card mb-3 shadow"
      >
        <div class="card-body d-flex justify-content-between align-items-center">
          <div class="d-flex align-items-center gap-3">
            <div>
              <h5 class="mb-0">{{ student.name }}</h5>
              <p class="text-muted small mb-0">
                Year {{ student.year }} | GPA: {{ student.gpa }}
              </p>
            </div>
          </div>
        </div>
      </div>
  </div>
</template>
