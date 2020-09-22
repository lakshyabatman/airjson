import express from 'express'
import dotenv from 'dotenv'

// importing routes 
import apiRoute from './routes'

dotenv.config()

const app = express();

app.use('/api', apiRoute)


export default app  