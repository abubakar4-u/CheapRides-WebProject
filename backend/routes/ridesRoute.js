import express from 'express';
const router = express.Router();
import { getRides, getRidesById, updateRideById, addRide } from '../controllers/ridesController.js';

//import multer from 'multer';
//const upload = multer({ dest: 'public/' });

//router.post('/', upload.single('image'), addRide); // Ensure the field name matches the frontend



router.route('/').post(addRide).get(getRides);  // Add this line to handle POST requests


router.route('/').get(getRides);
router.route('/:id').get(getRidesById);
router.route('/:id').put(updateRideById);

export default router;

