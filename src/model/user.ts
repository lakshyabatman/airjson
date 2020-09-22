import { Document, Model, model, Types, Schema, Query } from 'mongoose';
import api_key from '../middlewares/api_key';
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
    containers: [containerSchema],
    api_key: {
        type: String,
        unique: true
    }
})

interface Icontainer{
    name: String
}

interface IUserSchema extends Document{
    username: string,
    password: string,
    api_key: string,
    containers: Icontainer
}

const User = model<IUserSchema>('user', userSchema)

export default User