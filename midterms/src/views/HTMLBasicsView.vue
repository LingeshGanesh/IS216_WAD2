        <script setup>
        import CheatPage from '@/components/CheatPage.vue'

        const sections = [
  {
    "title": "HTML document skeleton",
    "description": "HTML uses tags/elements; tags can have attributes and attribute values.",
    "notes": [],
    "snippets": [
      {
        "title": "Basic page",
        "code": "<!doctype html>\n<html>\n<head>\n  <title>Hello World</title>\n</head>\n<body>\n  <p style=\"text-align:right\">\n    This is a paragraph.\n  </p>\n</body>\n</html>"
      }
    ]
  },
  {
    "title": "Meta tags",
    "description": "Metadata is machine-readable information about the page and is placed in <head>.",
    "notes": [
      "The viewport meta tag lets the page adapt its dimensions/scale to the device viewport.",
      "Week 1 also revises input fields, attributes and HTML5 tags."
    ],
    "snippets": [
      {
        "title": "Common meta tags",
        "code": "<head>\n  <meta charset=\"UTF-8\">\n  <meta name=\"description\" content=\"Free Web tutorials\">\n  <meta name=\"keywords\" content=\"HTML,CSS,XML,JavaScript\">\n  <meta name=\"author\" content=\"John Doe\">\n  <meta name=\"viewport\"\n        content=\"width=device-width, initial-scale=1.0\">\n</head>"
      }
    ]
  },
  {
    "title": "DOM mental model",
    "description": "An HTML document can be viewed as a tree. Building or modifying the document changes that tree.",
    "notes": [],
    "snippets": [
      {
        "title": "DOM source example",
        "code": "<!DOCTYPE HTML>\n<html>\n<head>\n  <title>About elk</title>\n</head>\n<body>\n  The truth about elk.\n</body>\n</html>"
      }
    ]
  }
]
        </script>

        <template>
          <CheatPage
            title="HTML Basics"
            summary="Week 1 HTML recap: document structure, tags/attributes, metadata and the DOM tree."
            source-note="Based on Week 1 slides 38\u201348."
            :sections="sections"
          />
        </template>
