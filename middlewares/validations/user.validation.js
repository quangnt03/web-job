const { body } = require('express-validator');
const constants = require('../../constants');

module.exports = [
  body('email')
    .notEmpty()
    .withMessage('this field is required')
    .isEmail()
    .withMessage('invaild email'),
  body('password')
    .notEmpty()
    .withMessage('this field is required')
    .isLength({ min: 6 })
    .withMessage('password has to be at least 6 characters')
    .isAlphanumeric()
    .withMessage('password must include both numbers and characters'),
  body('role')
    .notEmpty()
    .withMessage('this field is required')
    .isIn(constants.roles)
    .withMessage('invalid role'),
];
