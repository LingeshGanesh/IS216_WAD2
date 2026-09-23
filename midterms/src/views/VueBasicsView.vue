        <script setup>
        import CheatPage from '@/components/CheatPage.vue'

        const sections = [
  {
    "title": "Single File Component structure",
    "description": "",
    "notes": [
      "The course uses Composition API with <script setup>, not Options API.",
      "scoped means the style applies only to that component."
    ],
    "snippets": [
      {
        "title": "Component skeleton",
        "code": "<script setup>\n// Vue / JavaScript logic\n<\/script>\n\n<template>\n  <!-- HTML -->\n</template>\n\n<style scoped>\n/* CSS only for this component */\n</style>"
      }
    ]
  },
  {
    "title": "Reactive variables with ref()",
    "description": "",
    "notes": [
      "In script logic, access a ref using .value."
    ],
    "snippets": [
      {
        "title": "ref()",
        "code": "<script setup>\nimport { ref } from 'vue'\n\nconst name = ref('John')\nconst phone = ref(123456)\n\nconsole.log(name.value)\n\nfunction getPhone() {\n  return 'This is my number ' + phone.value\n}\n<\/script>"
      }
    ]
  },
  {
    "title": "Text interpolation",
    "description": "",
    "notes": [
      "{{ }} is used inside template content.",
      "Do not use mustaches inside HTML attributes; use v-bind instead."
    ],
    "snippets": [
      {
        "title": "Mustache syntax",
        "code": "<template>\n  <h1>Name: {{ name }}</h1>\n  <h1>Phone: {{ getPhone() }}</h1>\n</template>"
      }
    ]
  },
  {
    "title": "Conditional rendering",
    "description": "",
    "notes": [
      "v-else must immediately follow v-if or v-else-if.",
      "v-if inserts/removes from the DOM; v-show keeps the element and toggles CSS display."
    ],
    "snippets": [
      {
        "title": "v-if / v-else",
        "code": "<p v-if=\"x == 1\">Now you see me</p>\n<p v-else>You don't see me</p>"
      },
      {
        "title": "Multiple elements with template",
        "code": "<template v-if=\"ok\">\n  <h1>Title</h1>\n  <p>Paragraph 1</p>\n  <p>Paragraph 2</p>\n</template>"
      }
    ]
  }
]
        </script>

        <template>
          <CheatPage
            title="Vue Fundamentals"
            summary="Week 4 Vue essentials using the Composition API and <script setup>."
            source-note="Based on Week 4 slides 26\u201334."
            :sections="sections"
          />
        </template>
