import { Router } from 'express';
import { createContainer, fetchContainer } from '../controller/container'

const router = Router();

router.route('/:name')
    /**
     * @param name
     * return all the data inside the container
     */
    .get(fetchContainer)
    /**
     * @param name
     * create a container
     */
    .post(createContainer)

export default router