const mongoose = require('mongoose')

const containerSchema = new mongoose.Schema({
    userId: {
        type: String,
    },
    data: []
})

const Container = mongoose.model('container', containerSchema)

module.exports = {
    containerSchema,
    Container
}