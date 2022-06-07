const express = require('express')
const app = express()

const helmet = require('helmet')
const morgan = require('morgan')
const colors = require('colors')
const { connectDB } = require('./config/connectDB')
require('dotenv').config({ path: './config/config.env' })

const PORT = process.env.PORT || 5000

// use of the middlewares
app.use(helmet())
app.use(morgan('dev'))

// Connection to the database
connectDB()

// Routes
app.get('/', (req, res, next) => {
  res.send('hello')
})

// Connection to the server
app.listen(PORT, () => {
  console.log(`Connection on port ${PORT} and url http://localhost:${PORT}`.cyan)
})
