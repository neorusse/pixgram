import { Router } from 'express';

import { validateSignup, validateLogin, validate } from '../helper/validator';

import { createUser, userLogin } from '../controllers/AuthController';

const router = Router();

// user signup route
router.post('/signup', validateSignup(), validate, createUser);

// user login route
router.post('/login', validateLogin(), validate, userLogin);

export default router;
