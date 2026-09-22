<script setup>
import { ref, onMounted } from 'vue'

// TODO: Add Code Here to define the props and the emits for the SettingPanel component
const STORAGE_KEY = 'settings'

const theme = ref('light')
const fontSize = ref(16)

const emit = defineEmits(['settings-changed'])

// TODO: Implement the methods for the SettingPanel component
// TODO: Implement the helper method(s) as needed
function loadSettings() {
  // Add code here
  const saved = localStorage.getItem(STORAGE_KEY)

  if (saved) {
    const settings = JSON.parse(saved)

    theme.value = settings.theme
    fontSize.value = settings.fontSize
  }

  emit ('settings-changed', {
    theme: theme.value,
    fontSize: fontSize.value
  })
}

function saveSettings() {
  // Add code here
  const settings =  {
    theme:theme.value,
    fontSize: fontSize.value
  }

  localStorage.setItem(
    STORAGE_KEY,
    JSON.stringify(settings)
  )

  emit ('settings-changed', settings)
}

function resetSettings() {
  // Add code here
  theme.value = 'light'
  fontSize.value = 16

  localStorage.removeItem(STORAGE_KEY)

  emit('settings-changed', {
    theme: theme.value,
    fontSize: fontSize.value
  })
}

onMounted(() => {
  loadSettings()
})
</script>

<template>
  <div
    style="
      display: flex;
      gap: 16px;
      align-items: center;
      flex-wrap: wrap;
      padding: 12px;
      border: 1px solid #eee;
      border-radius: 8px;
    "
  >
    <label>
      Theme:
      <select v-model="theme" @change="saveSettings">
        <option value="light">Light</option>
        <option value="dark">Dark</option>
      </select>
    </label>

    <label>
      Font size:
      <input
        type="number"
        v-model.number="fontSize"
        min="12"
        max="24"
        style="width: 80px"
        @input="saveSettings"
      />
    </label>

    <button @click="resetSettings">Reset</button>
  </div>
</template>
