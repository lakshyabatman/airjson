import express from 'express';

// importing sub routes
import docRoute from './documents';
import containerRoute from './container'
import authRoute from './auth'

const router = express.Router();

router.use('/document', docRoute);
router.use('/container', containerRoute)
router.use('/auth', authRoute)


export default router;