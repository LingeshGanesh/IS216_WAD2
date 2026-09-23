        <script setup>
        import CheatPage from '@/components/CheatPage.vue'

        const sections = [
  {
    "title": "v-on event handling",
    "description": "",
    "notes": [
      "The slides list click, change, input, mouseover, mouseout and keyboard events."
    ],
    "snippets": [
      {
        "title": "General syntax",
        "code": "<div v-on:eventname=\"expression\"></div>"
      },
      {
        "title": "Common shorthand",
        "code": "<button @click=\"save\">Save</button>\n<input @change=\"handleChange\">"
      }
    ]
  },
  {
    "title": "Keyboard modifier",
    "description": "",
    "notes": [
      "Other modifiers shown: .tab, .delete, .esc, .space, .up, .down, .left, .right."
    ],
    "snippets": [
      {
        "title": "Enter key",
        "code": "<input v-on:keyup.enter=\"hello(name)\">"
      }
    ]
  },
  {
    "title": "onMounted()",
    "description": "The course focuses on onMounted: run logic after the component is inserted into the DOM.",
    "notes": [],
    "snippets": [
      {
        "title": "Lifecycle hook",
        "code": "<script setup>\nimport { onMounted } from 'vue'\n\nonMounted(() => {\n  // initial API call, DOM access, initialization\n})\n<\/script>"
      }
    ]
  },
  {
    "title": "Template JavaScript expressions",
    "description": "",
    "notes": [
      "Each binding can contain one expression, not statements/flow-control blocks."
    ],
    "snippets": [
      {
        "title": "Valid expressions",
        "code": "{{ number + 1 }}\n{{ ok ? 'YES' : 'NO' }}\n{{ message.split('').reverse().join('') }}\n\n<div :id=\"`list-${id}`\"></div>"
      },
      {
        "title": "Not valid",
        "code": "{{ var a = 1 }}\n{{ if (ok) { return message } }}"
      }
    ]
  }
]
        </script>

        <template>
          <CheatPage
            title="Vue Events + Lifecycle"
            summary="Week 5 event handling, lifecycle hooks and JavaScript expressions in templates."
            source-note="Based on Week 5 slides 4\u201310."
            :sections="sections"
          />
        </template>
