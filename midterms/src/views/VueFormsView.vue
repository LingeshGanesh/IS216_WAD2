        <script setup>
        import CheatPage from '@/components/CheatPage.vue'

        const sections = [
  {
    "title": "Checkbox",
    "description": "",
    "notes": [],
    "snippets": [
      {
        "title": "Multiple selected values",
        "code": "<script setup>\nimport { ref } from 'vue'\nconst selectedFruits = ref([])\n<\/script>\n\n<template>\n  <input type=\"checkbox\" value=\"Apple\"\n         v-model=\"selectedFruits\"> Apple\n  <input type=\"checkbox\" value=\"Orange\"\n         v-model=\"selectedFruits\"> Orange\n\n  <p>{{ selectedFruits }}</p>\n</template>"
      }
    ]
  },
  {
    "title": "Radio",
    "description": "",
    "notes": [],
    "snippets": [
      {
        "title": "One selected value",
        "code": "<script setup>\nconst picked = ref('')\n<\/script>\n\n<template>\n  <input type=\"radio\" value=\"One\" v-model=\"picked\"> One\n  <input type=\"radio\" value=\"Two\" v-model=\"picked\"> Two\n  <span>You picked: {{ picked }}</span>\n</template>"
      }
    ]
  },
  {
    "title": "Select",
    "description": "",
    "notes": [],
    "snippets": [
      {
        "title": "Select binding",
        "code": "<select v-model=\"selected\">\n  <option disabled value=\"\">Please select one</option>\n  <option>A</option>\n  <option>B</option>\n  <option>C</option>\n</select>"
      }
    ]
  },
  {
    "title": "Dynamic values",
    "description": "",
    "notes": [],
    "snippets": [
      {
        "title": "v-model + :value",
        "code": "<script setup>\nconst pick = ref('')\nconst a = ref('AAA')\nconst b = ref('BBB')\n<\/script>\n\n<template>\n  <input type=\"radio\" v-model=\"pick\" :value=\"a\">A\n  <input type=\"radio\" v-model=\"pick\" :value=\"b\">B\n</template>"
      }
    ]
  },
  {
    "title": "v-model modifiers",
    "description": "",
    "notes": [],
    "snippets": [
      {
        "title": "Modifiers",
        "code": "<input v-model.number=\"age\">\n<input v-model.trim=\"msg\">"
      }
    ]
  },
  {
    "title": "v-model vs v-bind",
    "description": "",
    "notes": [
      "v-bind is mainly for HTML attributes such as src, class, style and value.",
      "v-model is mainly for form/input two-way binding."
    ],
    "snippets": []
  }
]
        </script>

        <template>
          <CheatPage
            title="Vue Forms"
            summary="Week 5 extended v-model patterns for checkbox, radio, select, dynamic values and modifiers."
            source-note="Based on Week 5 slides 16\u201322."
            :sections="sections"
          />
        </template>
