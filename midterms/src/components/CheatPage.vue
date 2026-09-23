<script setup>
import CodeBox from './CodeBox.vue'

defineProps({
  eyebrow: {
    type: String,
    default: 'WAD II'
  },
  title: String,
  summary: String,
  sourceNote: String,
  sections: {
    type: Array,
    default: () => []
  }
})
</script>

<template>
  <article>
    <header class="page-header">
      <p class="eyebrow">{{ eyebrow }}</p>
      <h1>{{ title }}</h1>
      <p class="summary">{{ summary }}</p>
      <p v-if="sourceNote" class="source-note">{{ sourceNote }}</p>
    </header>

    <div class="section-stack">
      <section v-for="section in sections" :key="section.title" class="cheat-section">
        <h2>{{ section.title }}</h2>
        <p v-if="section.description" class="section-description">
          {{ section.description }}
        </p>

        <CodeBox
          v-for="snippet in section.snippets || []"
          :key="snippet.title + snippet.code"
          :title="snippet.title"
          :code="snippet.code"
        />

        <ul v-if="section.notes?.length" class="plain-notes">
          <li v-for="note in section.notes" :key="note">{{ note }}</li>
        </ul>
      </section>
    </div>
  </article>
</template>
