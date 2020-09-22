import express from 'express';
import dotenv from 'dotenv';
import './passport'
import passport from 'passport'

// importing routes 
import apiRoute from './routes';

dotenv.config();

const app = express();
app.use(passport.initialize())

app.use('/api', apiRoute);


export default app;