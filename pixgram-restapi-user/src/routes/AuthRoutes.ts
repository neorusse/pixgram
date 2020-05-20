import { Router } from 'express';

import { validateSignup, validateLogin, validate } from '../helper/validator';

import { createUser, userLogin } from '../controllers/AuthController';

const router = Router();

// write payments to db
router.post('/signup', validateSignup(), validate, createUser);

// write payments to db
router.post('/login', validateLogin(), validate, userLogin);

export default router;
