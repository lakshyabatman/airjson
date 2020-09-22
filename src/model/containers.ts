import { model, Schema } from 'mongoose'
import { documentSchema } from './document'

export const containerSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    doc: [documentSchema]
});

const Container = model('container', containerSchema)


export default Container