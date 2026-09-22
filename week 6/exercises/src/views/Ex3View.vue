<script setup>
import BlogPost from '../components/BlogPost.vue'
import axios from 'axios'

import { ref, onMounted } from 'vue'

const posts = ref([])


onMounted(async () => {
  try {
    const response = await axios.get('http://localhost:8000/posts')
    // this gets the data, which is an array
    posts.value = response.data
    console.log(response.data)
    console.log("Successful")
  } catch (error) {
    posts.value = [{ entry: 'There was an error: ' + error.message }]
  }
})

async function deletePost(id) {
  // TODO: Implement deletePost logic here. Given a subject, send a DELETE request to the server to delete the post with that subject. Update the posts array and status message accordingly.
  try {
    await axios.delete(`http://localhost:8000/posts/${id}`)
    posts.value = posts.value.filter(post => post.id !== id)
  } catch (error) {
    console.log(error)
  }

}
</script>

<template>
  <!-- TODO: make use of the 'BlogPost' component to display the blog posts -->
  <BlogPost
    v-for="(post, idx) in posts"
    :key="idx"
    :subject="post.subject"
    :entry="post.entry"
    :mood="post.mood">
    <button class="btn btn-primary" v-on:click="deletePost(post.id)">Delete</button>
  </BlogPost>

</template>

<style scoped>
.status {
  color: red;
}
</style>
