        <script setup>
        import CheatPage from '@/components/CheatPage.vue'

        const sections = [
  {
    "title": "Install Axios",
    "description": "",
    "notes": [],
    "snippets": [
      {
        "title": "Terminal",
        "code": "pnpm add axios"
      }
    ]
  },
  {
    "title": "async / await + try / catch",
    "description": "",
    "notes": [
      "await pauses the async function until the Promise settles.",
      "Axios responses include data, status, statusText and headers."
    ],
    "snippets": [
      {
        "title": "Core pattern",
        "code": "async function asyncCall() {\n  try {\n    const response = await axios.get(url)\n    const data = response.data\n    console.log(data)\n  } catch (error) {\n    console.error(error.message)\n  }\n}"
      }
    ]
  },
  {
    "title": "GET",
    "description": "",
    "notes": [],
    "snippets": [
      {
        "title": "GET with params",
        "code": "try {\n  const response = await axios.get(url, {\n    params: {\n      name1: value1,\n      name2: value2\n    }\n  })\n\n  console.log(response.data)\n} catch (error) {\n  console.log(error.message)\n}"
      }
    ]
  },
  {
    "title": "POST",
    "description": "",
    "notes": [],
    "snippets": [
      {
        "title": "POST body",
        "code": "try {\n  const response = await axios.post(url, {\n    name1: value1,\n    name2: value2\n  })\n\n  console.log(response.data)\n} catch (error) {\n  console.log(error.message)\n}"
      }
    ]
  },
  {
    "title": "PUT",
    "description": "",
    "notes": [],
    "snippets": [
      {
        "title": "PUT body",
        "code": "try {\n  const response = await axios.put(url, {\n    name1: value1,\n    name2: value2\n  })\n\n  console.log(response.data)\n} catch (error) {\n  console.log('There was an error: ' + error.message)\n}"
      }
    ]
  },
  {
    "title": "DELETE",
    "description": "",
    "notes": [],
    "snippets": [
      {
        "title": "DELETE with data payload",
        "code": "try {\n  const response = await axios.delete(url, {\n    data: { subject: subject }\n  })\n\n  console.log(response.data)\n} catch (error) {\n  console.log('There was an error: ' + error.message)\n}"
      }
    ]
  },
  {
    "title": "Request headers",
    "description": "",
    "notes": [],
    "snippets": [
      {
        "title": "POST with config",
        "code": "const data = {\n  title: 'Hello World',\n  body: 'This is my post content.'\n}\n\nconst config = {\n  headers: {\n    Authorization: 'Bearer YOUR_ACCESS_TOKEN',\n    'Content-Type': 'application/json'\n  }\n}\n\nconst response = await axios.post(url, data, config)"
      }
    ]
  },
  {
    "title": "Blog service endpoints from the slides",
    "description": "",
    "notes": [],
    "snippets": [
      {
        "title": "CRUD routes",
        "code": "GET    /posts\nGET    /posts/:id\nPOST   /posts\nPUT    /posts/:id\nDELETE /posts/:id"
      }
    ]
  }
]
        </script>

        <template>
          <CheatPage
            title="Axios + Async Requests"
            summary="Week 5 patterns for async/await and CRUD requests from Vue to backend REST endpoints."
            source-note="Based on Week 5 slides 31\u201348."
            :sections="sections"
          />
        </template>
