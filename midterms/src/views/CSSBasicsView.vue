        <script setup>
        import CheatPage from '@/components/CheatPage.vue'

        const sections = [
  {
    "title": "Three ways to use CSS",
    "description": "",
    "notes": [
      "Inline applies directly to one element.",
      "Internal uses a <style> block for one page.",
      "External keeps CSS in a separate file for linked pages."
    ],
    "snippets": [
      {
        "title": "Inline",
        "code": "<h2 style=\"color:red;\">\n  CAUTION: Icy Road Conditions\n</h2>"
      },
      {
        "title": "Internal",
        "code": "<head>\n  <style>\n    h2 { color: green; }\n  </style>\n</head>"
      },
      {
        "title": "External",
        "code": "<head>\n  <link rel=\"stylesheet\" href=\"mystyle.css\">\n</head>"
      }
    ]
  },
  {
    "title": "CSS rule syntax",
    "description": "",
    "notes": [
      "General form: selector { property: value; }",
      "The slides stress the semicolon after declarations."
    ],
    "snippets": [
      {
        "title": "Selectors and declarations",
        "code": "/* Single property */\np { color: red; }\n\n/* Multiple properties */\np {\n  color: red;\n  font-style: italic;\n  text-align: center;\n}\n\n/* Group selectors */\nh1, h2 { color: blue; }"
      }
    ]
  },
  {
    "title": "Selector quick reference",
    "description": "",
    "notes": [],
    "snippets": [
      {
        "title": "Core selectors",
        "code": "p        /* element selector */\n#myId    /* id selector */\n.myClass /* class selector */\n*        /* universal selector */"
      }
    ]
  },
  {
    "title": "Cascade / conflict reminder",
    "description": "The slides show inline styling taking priority over internal/external rules, and later same-priority rules winning when defined later.",
    "notes": [],
    "snippets": [
      {
        "title": "Inline wins in slide example",
        "code": "<style>\n  h2 { color: red; }\n</style>\n\n<h2 style=\"color: green;\">CAUTION</h2>\n<!-- result shown: green -->"
      }
    ]
  },
  {
    "title": "Common values",
    "description": "",
    "notes": [],
    "snippets": [
      {
        "title": "Display",
        "code": "display: block;\ndisplay: inline;\ndisplay: none;"
      },
      {
        "title": "Colours",
        "code": "color: #eab01c;\ncolor: rgb(30, 200, 0);\ncolor: rgba(30, 200, 0, 0.5);"
      },
      {
        "title": "Units",
        "code": "px   /* absolute */\n%    /* percentage */\nem   /* relative to parent font-size */\nvw   /* 1vw = 1% viewport width */"
      }
    ]
  }
]
        </script>

        <template>
          <CheatPage
            title="CSS Basics"
            summary="Week 2 essentials: ways to apply CSS, syntax, selectors, cascade and common display/text values."
            source-note="Based on Week 2 slides 5\u201323."
            :sections="sections"
          />
        </template>
