import express, { Request, Response } from 'express';
import {Express} from 'express';
import dotenv from 'dotenv';
import passport from 'passport';
import mongoose from 'mongoose';
import path from 'path';
dotenv.config();
import './passport';

// importing routes 
import apiRoute from './routes';

const app = express();



(async (app : Express) => { 
    try {
        await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        
        app.use(express.raw());
        app.use(express.json());
        app.use(express.urlencoded({ extended: true }))
        app.use(express.static(path.resolve(__dirname, "../", "client", "build")))
        
        app.use(passport.initialize())
        
        app.use('/api', apiRoute);
        
        app.use('*', (req: Request, res: Response) => {
            res.sendFile(path.resolve(__dirname, '../ ', 'client', 'build', 'index.html'))
        })
        
        
        app.listen(process.env.PORT || 5000, () => {
            console.log(`Server started at port ${process.env.PORT || 5000}`);
        })
    } catch (error) {
        console.log(error);
        process.exit(-1);
    }
    

})(app)