import { Router } from 'express';

import { auth } from '../middleware/auth';

import { getMe } from '../controllers/UserController';

const router = Router();

/** PROTECT ALL ROUTES AFTER THIS MIDDLEWARE */
router.use(auth);

// get signed in (Authenticated) user details
router.get('/me', getMe);

export default router;
