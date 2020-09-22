import express from 'express';

// importing sub routes
import docRoute from './documents';

const router = express.Router();

router.use('/document', docRoute);


export default router;