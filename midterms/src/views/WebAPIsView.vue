        <script setup>
        import CheatPage from '@/components/CheatPage.vue'

        const sections = [
  {
    "title": "Web API",
    "description": "A Web API exposes reusable functionality over the web so a web app can build on an existing service.",
    "notes": [
      "An API key identifies/authenticates the caller and should be kept secret.",
      "The slides use weather and Google Maps as examples."
    ],
    "snippets": []
  },
  {
    "title": "Request URL pattern",
    "description": "",
    "notes": [],
    "snippets": [
      {
        "title": "OpenWeather example from slides",
        "code": "https://api.openweathermap.org/data/2.5/weather\n  ?q={city name}\n  &appid={API key}"
      }
    ]
  }
]
        </script>

        <template>
          <CheatPage
            title="Web APIs"
            summary="Week 1 web-services recap: what a Web API is, why API keys exist and how API calls are structured."
            source-note="Based on Week 1 slides 61\u201369."
            :sections="sections"
          />
        </template>
