import express, { Request, Response } from 'express';
import dotenv from 'dotenv';
import passport from 'passport'
import path from 'path';
dotenv.config();
import './passport'



// importing routes 
import apiRoute from './routes';



const app = express();
app.use(express.raw());
app.use(express.json());
app.use(express.urlencoded({ extended: true }))
app.use(express.static(path.resolve(__dirname, "../", "client", "build")))

app.use(passport.initialize())

app.use('/api', apiRoute);

app.use('*', (req: Request, res: Response) => {
    res.sendFile(path.resolve(__dirname, '../ ', 'client', 'build', 'index.html'))
})


export default app;