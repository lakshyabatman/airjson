const app = require('./app')
const mongoose = require('mongoose')

mongoose.connect(process.env.MONGO_URI, {
    useUnifiedTopology: true,
    useNewUrlParser: true
}).then(() => {
    app.listen(3000, () => {
        console.log('server started at port 3000')
    })
}).catch(err => {
    throw err
})

