const mongoose = require('mongoose')

const containerSchema = new mongoose.Schema({
    userId: {
        type: String,
    },
    Data: []
})

const Container = mongoose.model('container', containerSchema)

module.exports = {
    containerSchema,
    Container
}