const express = require('express')
require('dotenv').config()

const app = express()

app.use(express.raw())
app.use(express.json())
app.use(express.urlencoded({extended: true}))

// api route 
const apiRoute = require('./routes')
app.use('/api', apiRoute)

module.exports = app