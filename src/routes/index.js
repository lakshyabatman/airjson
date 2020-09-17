const router = require('express').Router()

// importing routes
const containeRoute = require('./Container')
router.use('/container', containeRoute)

module.exports = router