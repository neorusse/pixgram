import { body, validationResult } from 'express-validator';

export const validateFeed = () => {
    return [
        body('caption', 'Caption is required or malformed!').not().isEmpty().trim().escape(),
        body('url', 'File url is required!').not().isEmpty().trim().escape(),
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
