import { model, Schema } from 'mongoose';
import bcrypt from 'bcrypt';

const SALT_FACTOR = 10

const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
    },
    api_key: {
        type: String,
        unique: true
    }
})

userSchema.pre('save', (next) => {
    let user: any = this;
    
    if(!user.isModified('password')) return next();

    bcrypt.genSalt(SALT_FACTOR, (err, salt) => {
        if(err) return next(err);

        bcrypt.hash(user.password, salt, (err, hash) => {
            if(err) return next(err);

            user.password = hash;

            return next();

        })
    })
})

userSchema.methods.comparePassword = function (candidatePassword, cb) {
    bcrypt.compare(candidatePassword, this.password, function (err, isMatch) {
        if (err) return cb(err);
        return cb(null, isMatch)
    });
};

const User = model('user', userSchema)

export default User