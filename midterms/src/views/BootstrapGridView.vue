        <script setup>
        import CheatPage from '@/components/CheatPage.vue'

        const sections = [
  {
    "title": "Bootstrap CDN",
    "description": "",
    "notes": [
      "The Week 3 slides say to use the CDN approach for the course."
    ],
    "snippets": [
      {
        "title": "Starter links",
        "code": "<!-- inside <head> -->\n<link\n  href=\"https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css\"\n  rel=\"stylesheet\"\n>\n\n<!-- before </body> -->\n<script\n  src=\"https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js\">\n<\/script>"
      }
    ]
  },
  {
    "title": "Container + row + columns",
    "description": "",
    "notes": [
      "Use .container for a responsive fixed-width container.",
      "Use .container-fluid to span the full browser width.",
      "Use .col with no number when columns should share remaining space equally."
    ],
    "snippets": [
      {
        "title": "12-column grid",
        "code": "<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col\">1 of 3</div>\n    <div class=\"col-6\">2 of 3 (wider)</div>\n    <div class=\"col\">3 of 3</div>\n  </div>\n</div>"
      }
    ]
  },
  {
    "title": "Responsive breakpoint columns",
    "description": "",
    "notes": [
      "sm \u2265 576px",
      "md \u2265 768px",
      "lg \u2265 992px",
      "xl \u2265 1200px",
      "xxl \u2265 1400px"
    ],
    "snippets": [
      {
        "title": "Stack below sm",
        "code": "<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-sm-8\">Main</div>\n    <div class=\"col-sm-4\">Side</div>\n  </div>\n</div>"
      }
    ]
  },
  {
    "title": "Grid alignment",
    "description": "",
    "notes": [],
    "snippets": [
      {
        "title": "Alignment classes",
        "code": "<div class=\"row justify-content-between align-items-center\">\n  <div class=\"col-4\">Left column</div>\n  <div class=\"col-4\">Right column</div>\n</div>"
      }
    ]
  }
]
        </script>

        <template>
          <CheatPage
            title="Bootstrap Setup + Grid"
            summary="Week 3: activate Bootstrap, then use its 12-column responsive grid and breakpoints."
            source-note="Based on Week 3 slides 4\u201315."
            :sections="sections"
          />
        </template>
