const app = require('./app')
const mongoose = require('mongoose')

const PORT = process.env.PORT || 5000

mongoose.connect(process.env.MONGO_URI, {
    useUnifiedTopology: true,
    useNewUrlParser: true
}).then(() => {
    app.listen(PORT, () => {
        console.log('server started at port 3000')
    })
}).catch(err => {
    throw err
})

