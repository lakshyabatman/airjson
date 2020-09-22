import passport from 'passport'
import { Strategy as LocalStrategy } from 'passport-local'
import User from './model/user'
import passportJwt, { Strategy as JWTStrategy, ExtractJwt } from 'passport-jwt'

passport.use(new LocalStrategy({
    usernameField: 'username',
    passwordField: 'password'
}, async (username, password, cb) => {

    try {
        let user: any = await User.findOne({ username: username });

        if (!user) return cb(null, false, { message: 'Incorrect Username' });

        await user.comparePassword(password, (err: any, isMatch: any) => {
            if (err) cb(err);

            if (!isMatch) cb(null, false, { message: "Incorrect Password" });

            return cb(null, true, { message: "Login successfull" });
        })

    } catch (error) {
        cb(error);
    }
}))

passport.use(new JWTStrategy({
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: process.env.JWT_SECRET
}, async (jwtPayload, cb) => {
    try {
        const user = await User.findOne({ _id: jwtPayload.id })
        cb(null, user)
    }
    catch (err) {
        cb(err)
    }
}))