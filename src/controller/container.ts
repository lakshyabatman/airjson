import Container from '../model/containers'
import { Request, Response } from 'express'


const createContainer = async (req: Request, res: Response) => {
    const { name } = req.params;

    try {
        const container = new Container({
            name: name,
            doc: []
        });

        let response = await container.save();

        return res.status(201).json(response)

    } catch (error) {
        return res.status(404).send(error)
    }


}

const fetchContainer = async (req: Request, res: Response) => {
    const { name } = req.params

    try {
        let container = await Container.find({})

        return res.status(200).json(container)
    } catch (error) {
        return res.status(404).send(error)
    }
}

export {
    createContainer,
    fetchContainer
}