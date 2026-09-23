        <script setup>
        import CheatPage from '@/components/CheatPage.vue'

        const sections = [
  {
    "title": "Text",
    "description": "",
    "notes": [],
    "snippets": [
      {
        "title": "Common classes",
        "code": "<p class=\"lead\">Lead paragraph</p>\n<p class=\"text-center\">Centered</p>\n<p class=\"text-end\">Right aligned</p>\n<p class=\"fw-bold\">Bold</p>\n<p class=\"fst-italic\">Italic</p>"
      }
    ]
  },
  {
    "title": "Lists",
    "description": "",
    "notes": [],
    "snippets": [
      {
        "title": "Remove bullets / inline",
        "code": "<ul class=\"list-unstyled\">\n  <li>Item</li>\n</ul>\n\n<ul class=\"list-inline\">\n  <li class=\"list-inline-item\">One</li>\n  <li class=\"list-inline-item\">Two</li>\n</ul>"
      }
    ]
  },
  {
    "title": "Responsive images",
    "description": "",
    "notes": [
      ".img-fluid makes an image responsive.",
      ".mx-auto horizontally centers fixed-width block content.",
      ".float-start and .float-end float images."
    ],
    "snippets": [
      {
        "title": "Image utilities",
        "code": "<img\n  src=\"image.jpg\"\n  class=\"img-fluid d-block mx-auto my-5\"\n>"
      }
    ]
  },
  {
    "title": "Spacing",
    "description": "Pattern: {property}{sides}-{size}, optionally with a breakpoint.",
    "notes": [
      "m = margin, p = padding.",
      "x = left + right, y = top + bottom."
    ],
    "snippets": [
      {
        "title": "Examples",
        "code": ".mx-auto\n.py-5\n.px-md-4\n.mt-0\n.mb-3"
      }
    ]
  },
  {
    "title": "Display + sizing",
    "description": "",
    "notes": [],
    "snippets": [
      {
        "title": "Display",
        "code": "d-none\nd-inline\nd-inline-block\nd-block"
      },
      {
        "title": "Sizing",
        "code": "w-25\nw-50\nw-75\nw-100\nh-50\nh-100"
      }
    ]
  }
]
        </script>

        <template>
          <CheatPage
            title="Bootstrap Utilities"
            summary="Week 3 utility classes for text, lists, images, spacing, display and sizing."
            source-note="Based on Week 3 slides 18\u201323."
            :sections="sections"
          />
        </template>
