        <script setup>
        import CheatPage from '@/components/CheatPage.vue'

        const sections = [
  {
    "title": "Naming conventions",
    "description": "",
    "notes": [],
    "snippets": [
      {
        "title": "Examples",
        "code": "underscore:       first_name\nPascalCase:       FirstName\nlowerCamelCase:   firstName"
      }
    ]
  },
  {
    "title": "JavaScript in HTML",
    "description": "Scripts can be in <head> or <body>. The slides recommend putting most scripts near the bottom of <body> unless they must run before rendering.",
    "notes": [],
    "snippets": [
      {
        "title": "Hello World",
        "code": "<html>\n<head>\n  <title>Hello World</title>\n</head>\n<body>\n  <script>\n    document.write(\"Hello World!\")\n  <\/script>\n</body>\n</html>"
      },
      {
        "title": "Placement reminder",
        "code": "<html>\n<head>\n  <script>/* only if needed before render */<\/script>\n</head>\n<body>\n  ...\n  <script>/* most scripts */<\/script>\n</body>\n</html>"
      }
    ]
  },
  {
    "title": "Vanilla event handling + DOM lookup",
    "description": "JavaScript can listen to user events and update DOM nodes.",
    "notes": [
      "document.getElementById(...) retrieves the element with that id.",
      "innerText represents the text content of the element."
    ],
    "snippets": [
      {
        "title": "Slide example",
        "code": "<p id=\"time\"></p>\n\n<button onclick=\"\n  document.getElementById('time').innerText = Date()\n\">\n  What time is it?\n</button>"
      }
    ]
  }
]
        </script>

        <template>
          <CheatPage
            title="JavaScript + DOM"
            summary="Week 1 vanilla JavaScript recap before moving into Vue: script placement, DOM access and events."
            source-note="Based on Week 1 slides 54\u201360."
            :sections="sections"
          />
        </template>
