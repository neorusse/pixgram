/**
 * Required External Modules
 */

import * as express from 'express';
import * as cors from 'cors';
import * as helmet from 'helmet';
import * as compression from 'compression';
import * as bodyParser from 'body-parser';
import * as errorhandler from 'strong-error-handler';
import * as logger from 'morgan';
import * as dotenv from 'dotenv';

dotenv.config();

/**
 * App Variables
 */

export const app = express();

// Importing routes
import feedRouter from './routes/FeedRoutes';

/**
 *  App Configuration
 */

// logs HTTP requests
app.use(logger('dev'));
app.use(compression());
app.use(helmet());
app.use(cors());
// middleware for parsing application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// middleware for json body parsing
app.use(bodyParser.json({ limit: '5mb' }));

// Root URI call
app.get('/', async (req, res) => {
    res.status(200).json({ info: 'Pixgram RESTFul API Feeds Microservice' });
});

// Routes
app.use('/api/v1/feeds', feedRouter);

app.use(
    errorhandler({
        debug: process.env.ENV !== 'prod',
        log: true,
    }),
);
