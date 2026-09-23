        <script setup>
        import CheatPage from '@/components/CheatPage.vue'

        const sections = [
  {
    "title": "Attribute binding: v-bind",
    "description": "",
    "notes": [
      "Use v-bind because {{ }} does not work inside HTML attributes."
    ],
    "snippets": [
      {
        "title": "Long + shorthand",
        "code": "<img src=\"/abc.png\" v-bind:width=\"x\">\n<img src=\"/abc.png\" :width=\"x\">"
      },
      {
        "title": "Bind several attributes",
        "code": "<script setup>\nconst obj = {\n  src: 'x',\n  width: 'y'\n}\n<\/script>\n\n<template>\n  <img v-bind=\"obj\">\n</template>"
      },
      {
        "title": "Boolean attribute",
        "code": "<button :disabled=\"isButtonDisabled\">\n  Button\n</button>"
      }
    ]
  },
  {
    "title": "Form input binding: v-model",
    "description": "",
    "notes": [
      "Two-way: input changes the ref, and changing the ref updates the input."
    ],
    "snippets": [
      {
        "title": "Two-way binding",
        "code": "<script setup>\nimport { ref } from 'vue'\nconst username = ref('')\n<\/script>\n\n<template>\n  Name: <input type=\"text\" v-model=\"username\">\n  Your name is {{ username }}\n</template>"
      }
    ]
  },
  {
    "title": "Class binding",
    "description": "",
    "notes": [],
    "snippets": [
      {
        "title": "Object syntax",
        "code": "<div\n  class=\"static\"\n  :class=\"{ demo: isActive, 'text-danger': hasError }\">\n</div>"
      },
      {
        "title": "Array syntax",
        "code": "<div :class=\"[activeClass, errorClass]\"></div>"
      }
    ]
  },
  {
    "title": "Style binding",
    "description": "",
    "notes": [
      "In a JS style object, CSS properties are commonly camelCase: fontSize, backgroundColor."
    ],
    "snippets": [
      {
        "title": "Style object",
        "code": "<div :style=\"{\n  color: activeColor,\n  fontSize: fontSize + 'px'\n}\">\n</div>"
      }
    ]
  }
]
        </script>

        <template>
          <CheatPage
            title="Vue Binding"
            summary="Week 4 reactive binding patterns: attributes, form inputs, classes and inline styles."
            source-note="Based on Week 4 slides 35\u201346."
            :sections="sections"
          />
        </template>
