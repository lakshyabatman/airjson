const express = require('express')
require('dotenv').config()

const app = express()

// api route 
const apiRoute = require('./routes')
app.use('/api', apiRoute)

module.exports = app