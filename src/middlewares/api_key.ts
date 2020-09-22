import User from '../model/user'
import {Response, Request, NextFunction} from 'express'

const middleware = (req: Request, res: Response, next: NextFunction) => {
    const api_key:any = req.headers.api_key;

    User.findOne().then((user: any) => {
        if(user.api_key != api_key) {
            return res.status(401).send('unauthorized')
        }

        return next()
    }).catch((err: any) => {
        return res.status(404).send(err)
    })

}

export default middleware