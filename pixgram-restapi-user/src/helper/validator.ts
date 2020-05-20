import { body, validationResult } from 'express-validator';

export const validateSignup = () => {
    return [
        body('firstName').not().isEmpty().trim().escape().withMessage('First Name must be provided'),
        body('lastName', 'Last Name must be provided').not().isEmpty().trim().escape(),
        body('email', 'Your email is not valid').not().isEmpty().trim().isEmail().normalizeEmail(),
        body('password', 'Your password must be at least 5 characters and alphanumeric')
            .not()
            .isEmpty()
            .trim()
            .isLength({ min: 5 })
            .isAlphanumeric()
            .escape(),
        body('confirmPassword', 'Passwords do not match')
            .custom((value, { req }) => value === req.body.password)
            .not()
            .isEmpty(),
    ];
};

export const validateLogin = () => {
    return [
        body('email', 'Please provide valid email and password!').not().isEmpty().trim().isEmail().normalizeEmail(),
        body('password', 'Please provide valid email and password!')
            .not()
            .isEmpty()
            .trim()
            .isLength({ min: 5 })
            .escape(),
    ];
};

export const validate = (req: any, res: any, next: any) => {
    const errors = validationResult(req);
    if (errors.isEmpty()) {
        return next();
    }
    const extractedErrors: any[] = [];
    errors.array().map((err) => extractedErrors.push({ [err.param]: err.msg }));

    return res.status(422).json({
        errors: extractedErrors,
    });
};
