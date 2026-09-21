const express = require('express')
const cors = require('cors')

const server = express()
server.use(express.json())
server.use(cors())

// Data used by Exercise 2
const posts = [
  {
    id: 1,
    subject: 'No BREAK!',
    entry: "I've been coding for 4 hours this week... Prof made me do it... I got no life!",
    mood: 'Angry',
  },
  {
    id: 2,
    subject: 'Vue',
    entry: 'Vue.js is awesome ... the best ever language!!!',
    mood: 'Happy',
  },
  {
    id: 3,
    subject: 'Lab Test',
    entry: 'Aiya... I got D again!',
    mood: 'Sad',
  },
]

// const posts = [
//   {
//     id: 1,
//     subject: 'No BREAK!',
//     entry: "I've been coding for 4 hours this week... Prof made me do it... I got no life!",
//     mood: 'Angry',
//   },
//   {
//     id: 2,
//     subject: 'Vue',
//     entry: 'Vue.js is awesome ... the best ever language!!!',
//     mood: 'Happy',
//   },
//   {
//     id: 3,
//     subject: 'Lab Test',
//     entry: 'Aiya... I got D again!',
//     mood: 'Sad',
//   },
// ]

// Ex2View.vue calls: axios.get('http://localhost:8000/getPosts')
server.get('/getPosts', (req, res) => {
  res.json(posts)
})

const HOST = 'localhost'
const PORT = 8000

server.listen(PORT, () => {
  console.log(`API running on http://${HOST}:${PORT}`)
  console.log(`Posts available at http://${HOST}:${PORT}/getPosts`)
})

server.delete('/posts', (req, res) => {
  const subject = req.body.subject

  const index = posts.findIndex(post => post.subject === subject)

  if (index === -1) {
    return res.status(404).json({
      message: 'Post not found'
    })
  }

  posts.splice(index, 1)

  res.json({
    message: 'Post deleted successfully'
  })
})