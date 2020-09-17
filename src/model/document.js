const mongoose = require('mongoose')

const documentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    data: []
})

const Document = mongoose.model('mongoose', documentSchema)

module.exports = Document