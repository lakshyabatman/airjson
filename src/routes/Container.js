const router = require('express').Router()
const { Container } = require('../model/container')

router.route('/')
    /**
     * @params name of container
     * Create a container
     * User needs to be logged in the website or client to create 
     * a container
     * 
     * Client will send json web token to for authenticate. 
     * We can also verify and validate the user who wants to 
     * create the container using jwt. 
     */
    .post()
    /**
     * @return Probably return all the containers
     */
    .get()

router.route('/:id')
    /**
     * @params container id
     * @return documents inside a container
     */
    .get()

module.exports = router