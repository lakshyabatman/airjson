const router = require('express').Router()
const { Container } = require('../model/container')

router.route('/')
    .post(async (req, res) => {
        const { data, userId } = req.body
        let container = new Container({
            userId: userId,
            data: data
        })

        let response = await container.save()

        return res.status(200).json(response)
    })
    .get(async (req, res) => {
        let con = await Container.find({})
        return res.status(200).json(con)
    })

module.exports = router