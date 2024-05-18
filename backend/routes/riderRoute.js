import express from 'express';
const router = express.Router();

import { getRider, getRiderById } from '../controllers/riderController.js';

router.route('/').get(getRider);
router.route('/:id').get(getRiderById);

export default router;

