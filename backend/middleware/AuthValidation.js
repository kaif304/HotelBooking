const Joi = require("joi");

const signupValidation = (req, res, next) => {
    const schema = Joi.object({
        name: Joi.string().min(3).max(10).required(),
        email: Joi.string().email().required(),
        phone: Joi.string().pattern(/^[0-9]{10}$/).required(),
        address: Joi.string().min(10).max(100).required(),
        password: Joi.string().min(3).max(8).required(),
    });
    const { error } = schema.validate(req.body);
    if(error) {
        return res.status(400).json({
            message: "Bad request! Fields are not correctly filled.",
            error
        });
    }
    next();
}

const loginValidation = (req, res, next) => {
    const schema = Joi.object({
        email: Joi.string().email().required(),
        password: Joi.string().min(3).max(8).required(),
    });
    const { error } = schema.validate(req.body);
    if(error) {
        return res.status(400).json({
            message: "Bad request! Fields are not correctly filled.",
            error
        });
    }
    next();
}

module.exports = {signupValidation, loginValidation};