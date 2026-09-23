<script setup>
import { computed, ref } from 'vue'
import { topics } from '@/data/topics'

const query = ref('')

const filteredTopics = computed(() => {
  const q = query.value.trim().toLowerCase()
  if (!q) return topics

  return topics.filter((topic) => {
    const haystack = [
      topic.name,
      topic.group,
      topic.description,
      ...topic.keywords
    ].join(' ').toLowerCase()

    return haystack.includes(q)
  })
})

const groups = computed(() => {
  const grouped = {}
  for (const topic of filteredTopics.value) {
    if (!grouped[topic.group]) grouped[topic.group] = []
    grouped[topic.group].push(topic)
  }
  return grouped
})
</script>

<template>
  <section>
    <div class="home-intro">
      <p class="eyebrow">Weeks 1–5</p>
      <h1>Web App Dev II Lab Cheat Sheet</h1>
      <p class="summary">
        Search by concept, then open the relevant skill page for a short explanation,
        code syntax and common gotchas.
      </p>
    </div>

    <input
      v-model="query"
      class="search-box"
      type="search"
      placeholder="Search: v-model, flexbox, axios, navbar..."
    />

    <div v-if="Object.keys(groups).length">
      <section v-for="(groupTopics, groupName) in groups" :key="groupName" class="topic-group">
        <div class="topic-group-heading">
          <h2>{{ groupName }}</h2>
        </div>

        <div class="topic-grid">
          <RouterLink
            v-for="topic in groupTopics"
            :key="topic.path"
            :to="topic.path"
            class="topic-card"
          >
            <h3>{{ topic.name }}</h3>
            <p>{{ topic.description }}</p>
          </RouterLink>
        </div>
      </section>
    </div>

    <div v-else class="empty-state">
      No topic matched "{{ query }}".
    </div>
  </section>
</template>
