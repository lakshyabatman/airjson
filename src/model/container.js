const mongoose = require('mongoose')

const { documentSchema } = require('./document')

const containerSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },

    documents: [documentSchema]
})

const Container = mongoose.model('container', containerSchema)

module.exports = {
    containerSchema,
    Container
}