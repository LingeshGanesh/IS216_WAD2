/* 
TRIAL LAB TEST C    model answer
Name: Very Evil Cute Bunny
Email: veryevilcutebunny@gmail.com
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

// Form state variables
const newCode = ref('');
const newName = ref('');
const newDescription = ref('');
const coreForIS = ref(false);
const coreForSE = ref(false);
const coreForCS = ref(false);
const coreForCL = ref(false);

// Answer part (a) Load data function
async function loadData() {
    try {
        errorMessage.value = '';
        const response = await axios.get(API_URL);
        courses.value = response.data.courseInfo;
    } catch (error) {
        errorMessage.value = 'Failed to load course data.';
    }
}

// Answer part (b) Add course 
async function addCourse() {
    errorMessage.value = '';

    // Validate that all 3 text fields are filled
    if (!newCode.value.trim() || !newName.value.trim() || !newDescription.value.trim()) {
        errorMessage.value = 'Please fill in all 3 text fields (Code, Name, and Description).';
        return;
    }

    const payload = {
        code: newCode.value,
        name: newName.value,
        description: newDescription.value,
        coreForIS: coreForIS.value,
        coreForSE: coreForSE.value,
        coreForCS: coreForCS.value,
        coreForCL: coreForCL.value
    };

    try {
        const response = await axios.post(API_URL, payload);

        if(response.data.item){

            const addedCourse = response.data.item;
            
            //  there are 2 ways to do this, each with its pros & cons:
            //  (i) only update the local copy for display (i.e. push newly added course to courses)
            //  (ii) do a full loadData() call which will refresh courses
            
            // solution (i) - update local copy 
            if (addedCourse) {
                courses.value.push(addedCourse);
            }
            // end solution (i)

            // solution (ii) - Refresh courses 
            //await loadData();
            // end solution (ii)

            // Reset form inputs
            newCode.value = '';
            newName.value = '';
            newDescription.value = '';
            coreForIS.value = false;
            coreForSE.value = false;
            coreForCS.value = false;
            coreForCL.value = false;
        }
    } catch (error) {
        errorMessage.value = error.response?.data?.message || 'Failed to add course.';
    }
}

// Answer part (c) Delete course
async function deleteCourse(code) {
    errorMessage.value = '';

    try {
        const response = await axios.delete(API_URL+"/" + code);
        
        // similarly, there are 2 ways to do this, each with its pros & cons:
        // (i) only update the local copy for display 
        // (ii) do a full loadData() call which will refresh courses

        // solution (i) - update local copy 
        if(response.data.item){
            const deletedCourseCode = response.data.item.code;

            if (deletedCourseCode) {
                // remove deleted course object from courses
                courses.value = courses.value.filter(
                    course => course.code !== deletedCourseCode
                );
            }
        }
        // end solution (i)

        // solution (ii) - Refresh courses 
        //await loadData();
        // end solution (ii)
    } catch (error) {
        errorMessage.value = error.response?.data?.message || 'Failed to delete course.';
    }
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
                    <label for="code">Course Code:</label>
                    <input id="code" type="text" v-model="newCode" placeholder="e.g. is113" />
                </div>

                <div class="form-group">
                    <label for="name">Course Name:</label>
                    <input id="name" type="text" v-model="newName" placeholder="e.g. Web App Dev" />
                </div>

                <div class="form-group full-width">
                    <label for="description">Description:</label>
                    <input id="description" type="text" v-model="newDescription" placeholder="Course details..." />
                </div>

                <div class="checkbox-group full-width">
                    <label><input type="checkbox" v-model="coreForIS" /> IS Core</label>
                    <label><input type="checkbox" v-model="coreForSE" /> SE Core</label>
                    <label><input type="checkbox" v-model="coreForCS" /> CS Core</label>
                    <label><input type="checkbox" v-model="coreForCL" /> CL Core</label>
                </div>

                <div class="full-width">
                    <button class="add-btn" type="button" @click="addCourse">Add Course</button>
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
                    
                    <!-- Answer part (d) -->
                    <td :class="course.coreForIS ? 'text-yes' : 'text-no'">   
                        {{ course.coreForIS ? 'Yes' : 'No' }}
                    </td>
                    <td :class="course.coreForSE ? 'text-yes' : 'text-no'">
                        {{ course.coreForSE ? 'Yes' : 'No' }}
                    </td>
                    <td :class="course.coreForCS ? 'text-yes' : 'text-no'">
                        {{ course.coreForCS ? 'Yes' : 'No' }}
                    </td>
                    <td :class="course.coreForCL ? 'text-yes' : 'text-no'">
                        {{ course.coreForCL ? 'Yes' : 'No' }}
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

