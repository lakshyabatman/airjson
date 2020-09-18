const express = require('express')
const path = require('path')
require('dotenv').config()

const app = express()

app.use(express.raw())
app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.use(express.static(path.join(__dirname, 'client', 'build')))

// api route 
const apiRoute = require('./routes')
app.use('/api', apiRoute)

// client handling 
app.get('*', (req,res) => {
    res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'))
})

module.exports = app