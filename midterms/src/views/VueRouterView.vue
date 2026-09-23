        <script setup>
        import CheatPage from '@/components/CheatPage.vue'

        const sections = [
  {
    "title": "RouterLink + RouterView",
    "description": "",
    "notes": [
      "RouterLink creates client-side navigation links.",
      "RouterView marks where the current route component is rendered."
    ],
    "snippets": [
      {
        "title": "Navigation",
        "code": "<template>\n  <RouterLink to=\"/\">Go to Home</RouterLink>\n  <RouterLink to=\"/about\">Go to About</RouterLink>\n\n  <RouterView />\n</template>"
      }
    ]
  },
  {
    "title": "Route parameter",
    "description": "",
    "notes": [
      "Route params are strings."
    ],
    "snippets": [
      {
        "title": "Router config",
        "code": "{\n  path: '/products/:id',\n  component: ProductsView\n}"
      },
      {
        "title": "Read parameter",
        "code": "<script setup>\nimport { useRoute } from 'vue-router'\n\nconst route = useRoute()\nconst productId = route.params.id\n<\/script>"
      }
    ]
  },
  {
    "title": "Redirect in router config",
    "description": "",
    "notes": [],
    "snippets": [
      {
        "title": "Static redirect",
        "code": "{\n  path: '/invalid',\n  redirect: '/Example1'\n}"
      }
    ]
  },
  {
    "title": "Programmatic navigation",
    "description": "",
    "notes": [
      "Use RouterLink for static navigation.",
      "Use router.push() when navigation follows an action."
    ],
    "snippets": [
      {
        "title": "router.push()",
        "code": "<script setup>\nimport { useRouter } from 'vue-router'\n\nconst router = useRouter()\n\nfunction logout() {\n  // logout logic\n  router.push('/Example1')\n}\n<\/script>"
      }
    ]
  }
]
        </script>

        <template>
          <CheatPage
            title="Vue Router"
            summary="Week 4 client-side routing for a Vue single-page application."
            source-note="Based on Week 4 slides 21\u201323 and 48\u201350."
            :sections="sections"
          />
        </template>
