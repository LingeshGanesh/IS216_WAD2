<script setup>
import { ref } from "vue";
import MyLogin from "./components/MyLogin.vue";

// Reactive data
const user = ref(null);

// Handle successful login
function doLoginSuccess(userInfo) {
  user.value = userInfo;
}

// Handle logout
function doLogout() {
  user.value = null;
}
</script>

<template>

  <MyLogin @login='doLoginSuccess' v-if='user === null'></MyLogin>

  <div class="bg-success text-white p-3" v-else>
    Welcome {{ user.name }}!
    <button class="btn btn-primary" @click="doLogout">Logout</button>
  </div>
</template>

<style scoped></style>
