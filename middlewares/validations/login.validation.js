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
    .withMessage('this field is required'),
];
