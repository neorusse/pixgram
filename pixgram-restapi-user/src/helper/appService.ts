import * as bcrypt from 'bcrypt';
import * as jwt from 'jsonwebtoken';

import { Users } from '../models/Users';

import * as jwtKey from '../config/config';

/**
 * Hash Password Method
 * @param {string} password
 * @returns {string} returns hashed password
 */
export async function hashPassword(password: string): Promise<string> {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(7));
}

/**
 * comparePassword
 * @param {string} hashPassword
 * @param {string} password
 * @returns {Boolean} return True or False
 */
export async function comparePasswords(password: string, hashPassword: string): Promise<boolean> {
    return await bcrypt.compareSync(password, hashPassword);
}

/**
 * Generate Token
 * @param {string} id
 * @returns {string} token
 */

export async function generateToken(user: Users): Promise<string> {
    const token = jwt.sign(user.short(), jwtKey.config.jwt.secret, { expiresIn: '7h' });

    return token;
}
