//Model file
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

const containerModel = model('container', containerSchema)


//Entity Object
class Container extends Document {
  name: String;
  doc: Array<any>;
  userId: Object | String;
}


export {
  containerModel,
  Container
}