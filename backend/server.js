require('dotenv').config()

const cors = require('cors')
const express = require('express')
const mongoose = require('mongoose')
const itemRoutes = require('./routes/items')

// express app
const app = express()

// middleware
app.use(express.json())
app.use(cors(
  {origin: ["http://localhost:3000", "https://bhumir2503.github.io/Inventory-Manager"]} 
))

app.use((req, res, next) => {
  console.log(req.path, req.method)
  next()
})

// routes
app.use('/Inventory-Manager/', itemRoutes)

// connect to db
mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log('connected to database')
    // listen to port
    app.listen(process.env.PORT, () => {
      console.log('listening for requests on port', process.env.PORT)
    })
  })
  .catch((err) => {
    console.log(err)
  }) 