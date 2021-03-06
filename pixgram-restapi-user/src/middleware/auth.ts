import * as jwt from 'jsonwebtoken';

import * as jwtKey from '../config/config';

export const auth = (req: any, res: any, next: any) => {
    // extract token
    const token = req.header('x-auth-token');

    if (!token) return res.status(401).send('Access denied, no token provided');

    try {
        const decoded = jwt.verify(token, jwtKey.config.jwt.secret);
        req.user = decoded;

        next();
    } catch (error) {
        res.status(400).send('Invalid token');
    }
};
