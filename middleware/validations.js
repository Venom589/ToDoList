const joi = require('joi');
const Mongoose = require('mongoose');

const categories = ["Work/Professional", "Personal", "Family", "Finance", "Health"];
const Priorites = ["High", "Medium", "Low"];
const objIdValidation = (id) => {
    try {
        if (!Mongoose.Types.ObjectId.isValid(id)) {
            throw new Error("TaskId is not valid :: ");
        }
    } catch (error) {
        throw error;
    }
}

const Signin = joi.object({
    username: joi.string()
        .pattern(new RegExp('^[A-Za-z]+$'))
        .min(6)
        .max(20)
        .required()
        .messages({
            "string.pattern.base": "Enter username of only alplabets"
        }),

    password: joi.string()
        .pattern(/^(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#$%^&*()-_+=|{}[\]:;'"<>,.?/])\S+$/)
        .max(20)
        .min(8)
        .required()
        .messages({
            "string.pattern.base": "Please enter a password that includes at least one uppercase letter, one lowercase letter and one special character without whitespace"
        }),

    email: joi.string()
        .email()
        .required()
        .max(30),
});

const Login = joi.object({

    password: joi.string()
        .pattern(/^(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#$%^&*()-_+=|{}[\]:;'"<>,.?/])\S+$/)
        .max(20)
        .min(8)
        .required()
        .messages({
            "string.pattern.base": "Please enter a password that includes at least one uppercase letter, one lowercase letter and one special character without whitespace"
        }),

    email: joi.string()
        .email()
        .required()
        .max(30)
    ,
});

const createTask = joi.object({
    email: joi.string()
        .email()
        .required()
        .max(30),
    title: joi.string()
        .min(6)
        .max(20)
        .required(),
    desc: joi.string()
        .max(200),
    category: joi.string()
        .required()
        .valid(...categories)
        .pattern(/^\S+$/)
        .messages({
            "string.pattern.base": "Please enter valid category from this Work/Professional, Personal, Family, Finance, Health or remove whitespace "
        }),
    endDate: joi.string()
        .pattern(/^(0[1-9]|[12][0-9]|3[01])-(0[1-9]|1[0-2])-\d{4}$/)
        .required()
        .messages({
            "string.pattern.base": "Please enter date which must be in the format dd-mm-yyyy"
        }),
    priority: joi.string()
        .valid(...Priorites)
        .pattern(/^\S+$/)
        .required()
        .messages({
            "string.pattern.base": "Please enter valid category from this High, Medium, Low or remove whitespace"
        }),
});

const emailAndTask = joi.object({
    email: joi.string()
        .email()
        .required()
        .max(30),
    taskId: joi.string()
        .required()
        .custom(objIdValidation, 'taskId')
});

const editTask = joi.object({
    email: joi.string()
        .email()
        .required()
        .max(30),
    taskId: joi.string()
        .required(),
    title: joi.string()
        .min(6)
        .max(20),
    desc: joi.string()
        .max(200),
    category: joi.string()
        .valid(...categories)
        .pattern(/^\S+$/)
        .messages({
            "string.pattern.base": "Please enter valid category from this Work/Professional, Personal, Family, Finance, Health or remove whitespace "
        }),
    endDate: joi.string()
        .pattern(/^(0[1-9]|[12][0-9]|3[01])-(0[1-9]|1[0-2])-\d{4}$/)
        .messages({
            "string.pattern.base": "Please enter date which must be in the format dd-mm-yyyy"
        }),
    priority: joi.string()
        .valid(...Priorites)
        .pattern(/^\S+$/)
        .messages({
            "string.pattern.base": "Please enter valid category from this High, Medium, Low or remove whitespace"
        }),

});

module.exports = { Signin, createTask, emailAndTask, editTask, Login }