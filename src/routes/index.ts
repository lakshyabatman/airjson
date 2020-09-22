import express from 'express';

// importing sub routes
import docRoute from './documents';
import containerRoute from './container'

const router = express.Router();

router.use('/document', docRoute);
router.use('/container', containerRoute)


export default router;