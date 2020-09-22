import User from '../model/user'

export default async (req, res, next) => {
    let { api_key } = req.headers

    try {
        let user = await User.findOne({ username: req.user.username })

        if (api_key !== user.api_key) {
            return res.status(401).send("unautorized")
        }

        return next()
    } catch (error) {
        return res.status(404).send(error)
    }
}