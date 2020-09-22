import { model, Schema } from 'mongoose'

export const containerSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    doc: [],
    userId: {
        type: Schema.Types.ObjectId
    }
});

const Container = model('container', containerSchema)


export default Container