const router = require('express').Router()
const { createDocument } = require('../controller/document')

router.route('/:name')
    /**
     * creates a new field
     */
    .post(createDocument)
    /**
     * fetches all the data
     */
    .get()

router.route('/:name/:id')
    /**
     * fetch a single document
     */
    .get()
    /**
     * update a document
     */
    .patch()
    /**
     * delete a document
     */
    .delete()



module.exports = router