import express from 'express';
const router = express.Router();

import {getCustomer,getCustomerById} from '../controllers/customerController.js';

router.route('/').get(getCustomer);
router.route('/:id').get(getCustomerById);



export default router;

