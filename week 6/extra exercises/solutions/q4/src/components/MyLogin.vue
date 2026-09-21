<script setup>
import { ref } from "vue";
import axios from "axios";

// Reactive data
const userid = ref("");
const pwd = ref("");
const message = ref("");

// Declare the "login" event that this component can emit to its parent
const emit = defineEmits(["login"]);

// Method triggered when the user clicks the login button
async function doLogin() {
  try {
    // Send POST request to server authentication endpoint with userid and password
    const response = await axios.post("http://localhost:3000/login", {
      userid: userid.value,
      pwd: pwd.value,
    });

    const obj = response.data;

    // Check if login was successful based on response status
    if (obj.status) {
      pwd.value = "";
      message.value = "";

      // Emit "login" event with user name to parent component
      emit("login", {
        name: obj.name,
      });
    }
  } catch (error) {
    // 401 and other HTTP errors: read error message from the response body
    if (error.response && error.response.data && error.response.data.message) {
      message.value = error.response.data.message + " [HTTP Status: "
        + error.response.status + " " + error.response.statusText + "]";
    } else {
      message.value = "Unable to authenticate." + " [Error Code: " + error.code + "]";
    }
  }
}
</script>

<template>
    <!-- User ID input group -->
    <div class='input-group mb-3'>
        <span class='input-group-text' id='inputUserID'>User ID</span>
        <input type='text' class='form-control' aria-label='Username' aria-describedby='inputUserID' v-model='userid'>
    </div>

    <!-- Password input group -->
    <div class='input-group mb-3'>
        <span class='input-group-text' id='inputPassword'>Password</span>
        <input type='password' class='form-control' aria-label='Password' aria-describedby='inputPassword'
            v-model='pwd'>
    </div>

    <!-- Login button triggers doLogin method -->
    <button class='btn btn-primary' @click='doLogin'>Login</button>
    <hr>

    <!-- Error or status message display -->
    <div class='text-danger'>
        {{ message }}
    </div>
</template>

<style scoped>
/* Scoped styles for this component (optional) */
</style>
