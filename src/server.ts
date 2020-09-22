import app from './app'
import mongoose from 'mongoose'


mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    app.listen(process.env.PORT || 5000, () => {
        console.log(`Server started at port ${process.env.PORT || 5000}`)
    })
}).catch(err => {
    console.log(err)
})