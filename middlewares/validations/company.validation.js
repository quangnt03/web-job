const { body } = require('express-validator');

module.exports = [
  body('name')
    .notEmpty()
    .withMessage('this field is required'),
  body('phone')
    .notEmpty()
    .withMessage('this field is required')
    .isNumeric({ no_symbols: true })
    .withMessage('Invalid phone number'),
  body('email')
    .isEmail()
    .withMessage('invalid email address'),
  body('working_fields')
    .notEmpty()
    .withMessage('this field is required'),
  body('description')
    .notEmpty()
    .withMessage('this field is required'),
  body('address')
    .notEmpty()
    .withMessage('this field is required'),
];
