const router = require('express').Router()

/**
 * importing routes
 */

// container route
const containeRoute = require('./Container')
router.use('/container', containeRoute)

// auth route
const authRoute = require('./auth')
router.use('/auth', authRoute)

module.exports = router