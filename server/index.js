const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const mongoose = require('mongoose')
require('dotenv').config()

const photoRoutes = require('./Routes/Photo.routes')
const app = express()

app.use(bodyParser.json())
app.use(cors())

app.listen(3000, () => {
  console.log('Server is running on port 3000')
})

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log('Connected to MongoDB')
  })
  .catch((err) => {
    console.log('Failed to connect to MongoDB', err)
  })

app.use('/', photoRoutes)
