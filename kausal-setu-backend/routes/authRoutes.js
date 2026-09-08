import express from 'express';
import { login,registerUser, registerWorker } from '../controllers/authController.js';
import { protect } from '../middleware/authMiddleware.js';
import { getMe } from '../controllers/authController.js'
const router = express.Router();

router.post('/login', login);
router.post('/register/user', registerUser);
router.post('/register/worker', registerWorker);
router.get('/me', protect, getMe);

export default router;