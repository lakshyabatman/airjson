const router = require('express').Router()

router.route('/:name')
    /**
     * creates a new field
     */
    .post()
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