<script setup>
import { ref } from 'vue'

const props = defineProps({
  title: {
    type: String,
    default: 'Code'
  },
  code: {
    type: String,
    required: true
  }
})

const copied = ref(false)

async function copyCode() {
  try {
    await navigator.clipboard.writeText(props.code)
    copied.value = true
    setTimeout(() => (copied.value = false), 1000)
  } catch {
    copied.value = false
  }
}
</script>

<template>
  <div class="code-box">
    <div class="code-box-header">
      <span class="code-box-title">{{ title }}</span>
      <button class="copy-btn" type="button" @click="copyCode">
        {{ copied ? 'Copied' : 'Copy' }}
      </button>
    </div>
    <pre><code>{{ code }}</code></pre>
  </div>
</template>
