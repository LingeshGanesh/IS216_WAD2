        <script setup>
        import CheatPage from '@/components/CheatPage.vue'

        const sections = [
  {
    "title": "Table",
    "description": "",
    "notes": [
      "Bootstrap table styling is opt-in: add the .table class."
    ],
    "snippets": [
      {
        "title": "Striped + hover table",
        "code": "<table class=\"table table-striped table-hover\">\n  <thead class=\"table-dark\">\n    <tr><th>Name</th><th>Score</th></tr>\n  </thead>\n  <tbody>\n    <tr><td>Alice</td><td>95</td></tr>\n  </tbody>\n</table>"
      }
    ]
  },
  {
    "title": "Buttons",
    "description": "",
    "notes": [],
    "snippets": [
      {
        "title": "Semantic variants",
        "code": "<button class=\"btn btn-primary\">Primary</button>\n<button class=\"btn btn-secondary\">Secondary</button>\n<button class=\"btn btn-success\">Success</button>\n<button class=\"btn btn-danger\">Danger</button>"
      }
    ]
  },
  {
    "title": "Dropdown",
    "description": "",
    "notes": [],
    "snippets": [
      {
        "title": "Dropdown pattern",
        "code": "<div class=\"dropdown\">\n  <button\n    class=\"btn btn-secondary dropdown-toggle\"\n    data-bs-toggle=\"dropdown\">\n    Menu\n  </button>\n\n  <ul class=\"dropdown-menu\">\n    <li><a class=\"dropdown-item\" href=\"#\">Item 1</a></li>\n    <li><a class=\"dropdown-item\" href=\"#\">Item 2</a></li>\n  </ul>\n</div>"
      }
    ]
  },
  {
    "title": "Collapse",
    "description": "",
    "notes": [],
    "snippets": [
      {
        "title": "Collapse target",
        "code": "<button\n  class=\"btn btn-primary\"\n  data-bs-toggle=\"collapse\"\n  data-bs-target=\"#myContent\">\n  Toggle\n</button>\n\n<div class=\"collapse\" id=\"myContent\">\n  <div class=\"card card-body\">\n    Hidden until toggled.\n  </div>\n</div>"
      }
    ]
  },
  {
    "title": "Carousel reminders",
    "description": "",
    "notes": [
      "One slide must have the .active class or the carousel will not be visible.",
      "Give the carousel a unique id.",
      "Controls/indicators use data-bs-target matching that carousel id."
    ],
    "snippets": []
  },
  {
    "title": "Navigation",
    "description": "",
    "notes": [
      "The toggler's data-bs-target must match the id of the .collapse.navbar-collapse wrapper."
    ],
    "snippets": [
      {
        "title": "Nav",
        "code": "<ul class=\"nav\">\n  <li class=\"nav-item\">\n    <a class=\"nav-link\" href=\"/home\">Home</a>\n  </li>\n  <li class=\"nav-item\">\n    <a class=\"nav-link\" href=\"/login\">Log In</a>\n  </li>\n</ul>"
      },
      {
        "title": "Navbar skeleton",
        "code": "<nav class=\"navbar navbar-expand-lg\" data-bs-theme=\"light\">\n  <div class=\"container\">\n    <a class=\"navbar-brand\" href=\"#\">Brand</a>\n\n    <button\n      class=\"navbar-toggler\"\n      data-bs-toggle=\"collapse\"\n      data-bs-target=\"#mainNav\">\n      <span class=\"navbar-toggler-icon\"></span>\n    </button>\n\n    <div class=\"collapse navbar-collapse\" id=\"mainNav\">\n      <ul class=\"navbar-nav\">\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" href=\"#\">Home</a>\n        </li>\n      </ul>\n    </div>\n  </div>\n</nav>"
      }
    ]
  }
]
        </script>

        <template>
          <CheatPage
            title="Bootstrap Components"
            summary="Week 3 component patterns: tables, buttons, dropdowns, collapse, cards, carousel, forms and navigation."
            source-note="Based on Week 3 slides 24\u201337."
            :sections="sections"
          />
        </template>
