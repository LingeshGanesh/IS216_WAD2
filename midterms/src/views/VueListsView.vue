        <script setup>
        import CheatPage from '@/components/CheatPage.vue'

        const sections = [
  {
    "title": "Array + index",
    "description": "",
    "notes": [],
    "snippets": [
      {
        "title": "Array",
        "code": "<script setup>\nconst items = ref(['a', 'b', 'c'])\n<\/script>\n\n<template>\n  <ul>\n    <li v-for=\"(item, idx) in items\">\n      {{ idx }} - {{ item }}\n    </li>\n  </ul>\n</template>"
      }
    ]
  },
  {
    "title": "Integer range",
    "description": "",
    "notes": [],
    "snippets": [
      {
        "title": "Repeat N times",
        "code": "<span v-for=\"n in 10\">\n  {{ n }}\n</span>"
      }
    ]
  },
  {
    "title": "Object iteration",
    "description": "",
    "notes": [
      "The order shown in the slides is value, name, index."
    ],
    "snippets": [
      {
        "title": "value, name, index",
        "code": "<li v-for=\"(value, name, index) in object\">\n  {{ index }}. {{ name }}: {{ value }}\n</li>"
      }
    ]
  },
  {
    "title": "Render several elements per item",
    "description": "",
    "notes": [],
    "snippets": [
      {
        "title": "template wrapper",
        "code": "<template v-for=\"item in items\">\n  <li>{{ item.msg }}</li>\n  <li class=\"divider\">==========</li>\n</template>"
      }
    ]
  },
  {
    "title": "v-if + v-for gotcha",
    "description": "The slides advise against placing v-if and v-for on the same node because v-if is evaluated first.",
    "notes": [],
    "snippets": [
      {
        "title": "Preferred wrapper",
        "code": "<template v-for=\"student in students\">\n  <li v-if=\"student.isInDeanList\">\n    {{ student.name }}\n  </li>\n</template>"
      }
    ]
  }
]
        </script>

        <template>
          <CheatPage
            title="Vue List Rendering"
            summary="Week 5 v-for patterns for arrays, ranges, objects and blocks of multiple elements."
            source-note="Based on Week 5 slides 24\u201330."
            :sections="sections"
          />
        </template>
