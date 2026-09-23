        <script setup>
        import CheatPage from '@/components/CheatPage.vue'

        const sections = [
  {
    "title": "Computed property",
    "description": "",
    "notes": [
      "A computed property is a function used like a variable.",
      "Computed values are cached based on reactive dependencies."
    ],
    "snippets": [
      {
        "title": "computed()",
        "code": "<script setup>\nimport { ref, computed } from 'vue'\n\nconst fName = ref('Jack')\nconst lName = ref('Daniel')\n\nconst fullName = computed(() => {\n  return fName.value + ' ' + lName.value\n})\n<\/script>\n\n<template>\n  <p>{{ fullName }}</p>\n</template>"
      }
    ]
  },
  {
    "title": "Equivalent method",
    "description": "",
    "notes": [
      "The slides state that a method runs whenever a re-render happens.",
      "A computed property only re-evaluates when its reactive dependencies change."
    ],
    "snippets": [
      {
        "title": "Method",
        "code": "function getFullName() {\n  return fName.value + ' ' + lName.value\n}\n\n<!-- template -->\n<p>{{ getFullName() }}</p>"
      }
    ]
  }
]
        </script>

        <template>
          <CheatPage
            title="Computed Properties + Methods"
            summary="Week 5: use computed properties for values derived from reactive state; understand how they differ from methods."
            source-note="Based on Week 5 slides 14\u201315."
            :sections="sections"
          />
        </template>
