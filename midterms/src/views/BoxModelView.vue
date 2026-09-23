        <script setup>
        import CheatPage from '@/components/CheatPage.vue'

        const sections = [
  {
    "title": "Border",
    "description": "",
    "notes": [
      "border-left/right/top/bottom can style individual sides.",
      "border-radius creates rounded corners."
    ],
    "snippets": [
      {
        "title": "Border examples",
        "code": "border: 1px solid black;\nborder-left: 4px solid black;\nborder-radius: 8px;"
      }
    ]
  },
  {
    "title": "Margin",
    "description": "Margin creates space outside an element's border.",
    "notes": [
      "The slides list auto, length, %, and inherit as possible margin values.",
      "auto can horizontally center an element within its container."
    ],
    "snippets": [
      {
        "title": "Margin examples",
        "code": "margin-top: 10px;\nmargin-right: 20px;\nmargin-bottom: 10px;\nmargin-left: 20px;\n\nmargin: auto;"
      }
    ]
  },
  {
    "title": "Padding",
    "description": "Padding creates space around the content, inside the border.",
    "notes": [],
    "snippets": [
      {
        "title": "Padding examples",
        "code": "padding-top: 10px;\npadding-right: 20px;\npadding-bottom: 10px;\npadding-left: 20px;"
      }
    ]
  },
  {
    "title": "box-sizing",
    "description": "Controls whether padding and borders count inside or outside the width/height you set.",
    "notes": [],
    "snippets": [
      {
        "title": "Common pattern from takeaway",
        "code": "* {\n  box-sizing: border-box;\n}"
      }
    ]
  }
]
        </script>

        <template>
          <CheatPage
            title="CSS Box Model"
            summary="Every element can be thought of as content surrounded by padding, border and margin."
            source-note="Based on Week 2 slides 25\u201330."
            :sections="sections"
          />
        </template>
