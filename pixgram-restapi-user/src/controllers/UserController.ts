import { Request, Response } from 'express';

import { Users } from '../models/Users';

/**
 * Get authenticated user details
 * @param {object} req
 * @param {object} res
 * @returns {object} User object
 */
export async function getMe(req: Request, res: Response) {
    try {
        const returnUser = await Users.findByPk(req.body.email);

        const user = {
            firstName: returnUser.firstName,
            lastName: returnUser.lastName,
            email: returnUser.email,
        };

        res.status(200).json({
            status: 200,
            success: true,
            message: 'user successfully retrieved',
            user,
        });

        return;
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Internal Server Error',
        });

        return;
    }
}
