/**
 * Required External Modules
 */

import * as dotenv from 'dotenv';
import express, { Application } from 'express';
import cors from 'cors';
import helmet from 'helmet';
import compression from 'compression';
import logger from 'morgan';
import createError from 'http-errors';

dotenv.config();

/**
 * App Variables
 */

if (!process.env.PORT) {
	process.exit(1);
}

const PORT: number = parseInt(process.env.PORT as string, 10);

const app: Application = express();

/**
 *  App Configuration
 */

// logs HTTP requests
app.use(logger('dev'));

app.use(compression());
app.use(helmet());
app.use(cors());
app.use(express.json());

// Root URI call
app.get('/', async (req, res) => {
	res.status(200).json({ info: 'Pixgram RESTFul API Feeds Microservice' });
});

// catch 404 and forward to error handler
app.use(function (
	_req: express.Request,
	_res: express.Response,
	next: express.NextFunction
) {
	next(createError(404));
});

// error handler
app.use((err: any, req: express.Request, res: express.Response) => {
	// set locals, only providing error in development
	res.locals.message = err.message;
	res.locals.error = req.app.get('env') === 'development' ? err : {};

	// render the error page
	res.status(err.status || 500);
	res.render('error');
});

/**
 * Server Activation
 */

app.listen(PORT, () => {
	console.log(`server running http://localhost: ${PORT}`);
	console.log(`press CTRL+C to stop Server`);
});
