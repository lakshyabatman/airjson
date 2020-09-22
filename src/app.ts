import express from 'express';
import dotenv from 'dotenv';
import passport from 'passport'
dotenv.config();
import './passport'



// importing routes 
import apiRoute from './routes';



const app = express();
app.use(passport.initialize())

app.use('/api', apiRoute);


export default app;