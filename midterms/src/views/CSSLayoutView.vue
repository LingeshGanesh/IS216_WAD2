        <script setup>
        import CheatPage from '@/components/CheatPage.vue'

        const sections = [
  {
    "title": "Flexbox core pattern",
    "description": "",
    "notes": [
      "justify-content aligns on the main axis.",
      "align-items aligns on the cross axis.",
      "Common values shown: flex-start, center, flex-end, space-between, space-around."
    ],
    "snippets": [
      {
        "title": "Container",
        "code": ".container {\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n  gap: 16px;\n  flex-wrap: wrap;\n}"
      },
      {
        "title": "Child",
        "code": ".item {\n  flex: 1;\n}"
      }
    ]
  },
  {
    "title": "Grid core pattern",
    "description": "",
    "notes": [],
    "snippets": [
      {
        "title": "Explicit rows + columns",
        "code": ".grid-container {\n  display: grid;\n  grid-template-columns: 200px 1fr 200px;\n  grid-template-rows: 60px 1fr 40px;\n  gap: 12px;\n}\n\nheader,\nfooter {\n  grid-column: 1 / 4;\n}"
      }
    ]
  },
  {
    "title": "Grid template areas",
    "description": "",
    "notes": [
      "The slides recommend Grid for the page skeleton and Flexbox for components inside."
    ],
    "snippets": [
      {
        "title": "Named layout",
        "code": ".page {\n  display: grid;\n  grid-template-columns: 1fr 3fr;\n  grid-template-rows: auto 1fr auto;\n  grid-template-areas:\n    \"header header\"\n    \"sidebar main\"\n    \"footer footer\";\n  gap: 10px;\n}\n\nheader { grid-area: header; }\naside  { grid-area: sidebar; }\nmain   { grid-area: main; }\nfooter { grid-area: footer; }"
      }
    ]
  }
]
        </script>

        <template>
          <CheatPage
            title="Flexbox + CSS Grid"
            summary="Week 2 layout tools: Flexbox for one dimension and Grid for two dimensions."
            source-note="Based on Week 2 slides 42\u201349."
            :sections="sections"
          />
        </template>
