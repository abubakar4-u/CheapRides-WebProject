import express from 'express';
const router = express.Router();

import {getUserProfile,getUserById,authUser, registerUser, logoutUser,updateUserProfile,getUsers,deleteUser,updateUserById} from '../controllers/userController.js';
import {protect, admin} from '../middleware/authmiddleware.js';

router.route('/').post(registerUser).get(protect,admin,getUsers);
router.post('/logout',logoutUser);
router.post('/auth',authUser);
router.route('/profile').get(protect, getUserProfile).put(protect, updateUserProfile);
router.route('/:id').delete(protect,admin,deleteUser).get(protect,admin,getUserById).put(protect,admin,updateUserProfile);
router.route('/').get(getUserProfile);
router.route('/:id').get(getUserById);

export default router;

