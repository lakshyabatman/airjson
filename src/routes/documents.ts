import express from 'express';

const router = express.Router();

router.route('/:doc')
    .get()

export default router;