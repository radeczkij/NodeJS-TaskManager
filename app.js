require('dotenv').config()
const express = require('express')
const app = express()
const tasks = require('./routes/tasks')
const connectDB = require('./db/connect')

app.use(express.json())
app.use(express.static('./public'))
app.use('/api/v1/tasks', tasks)

const PORT = 3000

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URL)
    app.listen(PORT, console.log(`Server is running on port ${PORT}...`))
  } catch (e) {
    console.log(e)
  }
}

start()