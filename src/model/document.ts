import {model, Schema} from 'mongoose'

export const documentSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    data: []
})

const Doc = model('document', documentSchema)

export default Doc