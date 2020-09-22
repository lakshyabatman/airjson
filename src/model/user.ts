import { model, Schema } from 'mongoose';
import { containerSchema } from './containers'

const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        unique: true
    },
    containers: [containerSchema]
})

const User = model('user', userSchema)

export default User