const { Document } = require('../model/document')


const createDocument = async (req, res) => {
    const { name } = req.params

    try {

        // checking wheather a document of this name exists or not
        let doc = await Document.find({ name: name })

        if (doc) {
            return res.staus(401).send('Duplicate name of doc is not allowed')
        }

        const newDoc = new Document({
            name: name
        })

        let response = await newDoc.save()

        return res.status(201).json(response)

    } catch (error) {
        return res.status(404).send(error)
    }
}

module.exports = {
    createDocument
}