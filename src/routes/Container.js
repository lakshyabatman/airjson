const router = require('express').Router()
const { Container } = require('../model/container')

router.route('/')
    /**
     * Create a container
     * User needs to be logged in the website or client to create 
     * a container
     * 
     * Client will send json web token to create authenticate. 
     * We can also verify and validate the user who wants to 
     * create the container using jwt. 
     * 
     */
    .post()
    .get()

module.exports = router