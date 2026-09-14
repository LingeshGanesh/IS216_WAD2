const express = require('express')
const fs      = require('fs')
const path    = require('path')

const PORT    = 8000
const DB_FILE = path.join(__dirname, 'students.json')

function load() {
  try { return JSON.parse(fs.readFileSync(DB_FILE, 'utf8')) } catch { return [] }
}
function save(data) {
  const tmp = DB_FILE + '.tmp'
  fs.writeFileSync(tmp, JSON.stringify(data, null, 2))
  fs.renameSync(tmp, DB_FILE)
}
function nextId(students) {
  return students.reduce((max, s) => Math.max(max, s.id), 0) + 1
}

const app = express()
app.use(express.json())
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin',  '*')
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, DELETE, OPTIONS')
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type')
  next()
})
app.options('*', (req, res) => res.sendStatus(200))

// GET /students — return all students
app.get('/students', (req, res) => {
  const studentYear = req.query.year;
  const students = load();
  if (studentYear) {
    res.json(students.filter(stud=>stud.year===parseInt(studentYear)))
    return
  }
  res.json(students)
})

// POST /students — add a new student
app.post('/students', (req, res) => {
  const { name, year, gpa } = req.body || {}
  const trimmed = String(name ?? '').trim()
  if (!trimmed) return res.status(400).json({ error: 'Name is required.' })

  const students = load()
  const student  = {
    id:   nextId(students),
    name: trimmed,
    year: Number(year) || 1,
    gpa:  Number(gpa)  || 0,
  }
  students.push(student)
  save(students)
  res.status(201).json(student)
})

// DELETE /students/:id — remove a student
app.delete('/students/:id', (req, res) => {
  const id       = Number(req.params.id)
  const students = load()
  const idx      = students.findIndex(s => s.id === id)
  if (idx === -1) return res.status(404).json({ error: 'Student not found.' })

  const [removed] = students.splice(idx, 1)
  save(students)
  res.json(removed)
})

app.listen(PORT, () => console.log(`Student server running at http://localhost:${PORT}`))
