import { Request, Response } from 'express';

import { Users } from '../models/Users';

import { hashPassword, generateToken, comparePasswords } from '../helper/appService';

/**
 * User Signup
 * @param {string} firstName
 * @param {string} lastName
 * @param {string} email
 * @param {string} password
 * @returns {object} User object
 */
export async function createUser(req: Request, res: Response) {
    const { firstName, lastName, email, password } = req.body;

    // sanitize first name
    const sanitizedFirstname = firstName.toLowerCase();

    // sanitize last name
    const sanitizedLastname = lastName.toLowerCase();

    // find the user
    const user = await Users.findByPk(email);

    // check that user doesnt exists
    if (user) {
        return res.status(422).send({
            auth: false,
            message: 'User may already exist',
        });
    }

    const hashedPassword = await hashPassword(password);

    const newUser = await new Users({
        firstName: sanitizedFirstname,
        lastName: sanitizedLastname,
        email: email,
        password: hashedPassword,
    });

    let savedUser;

    try {
        savedUser = await newUser.save();
    } catch (e) {
        throw e;
    }

    // Generate JWT
    const jwt = await generateToken(savedUser);

    res.status(201).json({ token: jwt, user: savedUser.short() });

    return;
}

/**
 * User Login
 * @param {string} email
 * @param {string} password
 * @returns {object} User object
 */
export async function userLogin(req: Request, res: Response) {
    const { email, password } = req.body;

    // retrieve user details
    const user = await Users.findByPk(email);

    // check that user exists
    if (user === null) {
        res.status(401).send({
            auth: false,
            message: 'Unauthorized',
        });

        return;
    }

    // check that the password matches
    const authValid = await comparePasswords(password, user.password);

    if (!authValid) {
        res.status(401).send({
            auth: false,
            message: 'Unauthorized',
        });

        return;
    }

    // Generate JWT
    const jwt = await generateToken(user);

    res.status(200).json({
        auth: true,
        token: jwt,
        user: user.short(),
    });

    return;
}
