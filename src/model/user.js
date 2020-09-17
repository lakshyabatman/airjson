const mongoose = require('mongoose')

const {
    containerSchema
} = require('./container')

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: 'true'
    },
    passward: {
        type: String,
        required: true
    },
    containers: [containerSchema]
})

const User = mongoose.model('user', userSchema)

module.exports = {
    userSchema,
    User
}