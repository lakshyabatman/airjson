import express from 'express'

// importing routes 
import apiRoute from './routes'

const app = express();

app.use('/api', apiRoute)


export default app  