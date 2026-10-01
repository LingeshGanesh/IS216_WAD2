/* 
TRIAL LAB TEST C 
Name: 
Email: 
*/

<script setup>
import { computed, onMounted, ref } from 'vue';
import axios from 'axios';
import './q4_readonly.css';

/*
 * Q4: Vue - AXIOS & JSON
 *
 * Edit only this file.
 *
 * Use Axios for all HTTP calls.
 * The backend server is available at:
 *     API_URL = 'http://127.0.0.1:8000/api'
 *
 */

const API_URL = 'http://127.0.0.1:8000/api';
const courses = ref([]);
const errorMessage = ref('');
const newCode = ref('');
const newName = ref('');
const newDescription = ref('');

const coreIS = ref(false);
const coreSE = ref(false);
const coreCS = ref(false);
const coreCL = ref(false);



// Part (a) Load data function
async function loadData() {
    errorMessage.value = '';

    // add code here
    try {
        const response = await axios.get(API_URL);
        // console.log(response);
        courses.value = response.data.courseInfo;
        console.log(courses);
    } catch (error) {
        console.log(error)
    }

}

// Part (b) Add course 
async function addCourse() {
    errorMessage.value = '';

    // Validate that all 3 text fields are filled
    if (!newCode.value.trim() || !newName.value.trim() || !newDescription.value.trim()) {
        errorMessage.value = 'Please fill in all 3 text fields (Code, Name, and Description).';
        return;
    }

    // add code here
    const newCourse = {
        code: newCode.value,
        name: newName.value,
        description: newDescription.value,
        coreForIS: coreIS.value,
        coreForSE: coreSE.value,
        coreForCS: coreCS.value,
        coreForCL: coreCL.value
    }

    console.log(newCourse);

    try {
        await axios.post(API_URL,newCourse)
    } catch (error) {
        console.log(error);
    }

    loadData()
    newCode.value=''
    newName.value=''
    newDescription.value=''

}

// Part (c) Delete course
async function deleteCourse(code) {
    errorMessage.value = '';

    // add code here
    try {
        await axios.delete(`${API_URL}/${code}`)
    } catch (error) {
        console.log(error)
        errorMessage.value = "Failed to delete course"
    }

    loadData()
}

// Fetch data automatically when component mounts
onMounted(loadData);
</script>

<template>
    <div class="q4-container">
        <p v-if="errorMessage" class="error-msg">{{ errorMessage }}</p>

        <!-- Add New Course Section ------------------->
        <section class="add-course-card">
            <h2>Add New Course</h2>

            <div class="form-grid">
                <div class="form-group">
                    <label for="newCode">Course Code:</label>
                    <input v-model="newCode" id="newCode" type="text" placeholder="e.g. is113" />
                </div>

                <div class="form-group">
                    <label for="newName">Course Name:</label>
                    <input v-model="newName" id="newName" type="text" placeholder="e.g. Web App Dev" />
                </div>

                <div class="form-group full-width">
                    <label for="newDescription">Description:</label>
                    <input v-model="newDescription" id="newDescription" type="text" placeholder="Course details..." />
                </div>

                <div class="checkbox-group full-width">
                    <label><input type="checkbox"  v-model="coreIS"/> IS Core</label>
                    <label><input type="checkbox"  v-model="coreSE"/> SE Core</label>
                    <label><input type="checkbox"  v-model="coreCS"/> CS Core</label>
                    <label><input type="checkbox"  v-model="coreCL"/> CL Core</label>
                </div>

                <div class="full-width">
                    <button class="add-btn" type="button" @click="addCourse()">Add Course</button>
                </div>
            </div>
        </section>

        <!-- Courses Table ------------------->
        <table class="bordered-table">
            <thead>
                <tr>
                    <th>Code</th>
                    <th>Name</th>
                    <th>Description</th>
                    <th>IS Core</th>
                    <th>SE Core</th>
                    <th>CS Core</th>
                    <th>CL Core</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="course in courses" :key="course.code">
                    <td>{{ course.code }}</td>
                    <td>{{ course.name }}</td>
                    <td>{{ course.description }}</td>
                    
                    <!-- Part (d) Yes/No -->
                    <td>
                        <p v-if="course.coreForIS===true" class="text-yes">Yes</p>
                        <p v-else class="text-no">No</p>
                    </td>
                    <td>
                        <p v-if="course.coreForSE===true" class="text-yes">Yes</p>
                        <p v-else class="text-no">No</p>
                    </td>
                    <td>
                        <p v-if="course.coreForCS===true" class="text-yes">Yes</p>
                        <p v-else class="text-no">No</p>
                    </td>
                    <td>
                        <p v-if="course.coreForCL===true" class="text-yes">Yes</p>
                        <p v-else class="text-no">No</p>
                    </td>
                    <td>
                        <button class="delete-btn" type="button" @click="deleteCourse(course.code)">
                            Delete
                        </button>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

