import { Router } from 'express';

import { auth } from '../middleware/auth';

import { validateFeed, validate } from '../helper/validator';

import { getSignedUrl, getAllFeed, getFeed, postFeed } from '../controllers/FeedController';

const router = Router();

// get all feed items
router.get('/', getAllFeed);

// get all feed items
router.get('/:id', getFeed);

/** PROTECT ALL ROUTES AFTER THIS MIDDLEWARE */
router.use(auth);

// get signed url
router.get('/signed-url/:fileName', getSignedUrl);

// post a feed
router.post('/', validateFeed(), validate, postFeed);

export default router;
