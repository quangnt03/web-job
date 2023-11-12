const { body } = require("express-validator");
const { gender } = require("../../constants");

module.exports = [
  body("name").notEmpty().withMessage("this field is required"),
  body("dob")
    .notEmpty()
    .withMessage("this field is required")
    .isDate()
    .withMessage("date format should be in the format YYYY-MM-DD"),
  body("gender")
    .notEmpty()
    .withMessage("this field is required")
    .isIn(["male", "female", "none"])
    .withMessage("invalid gender"),
  body("phone")
    .notEmpty()
    .withMessage("this field is required")
    .isNumeric({ no_symbols: true })
    .withMessage("Invalid phone number"),
  body("email")
    .notEmpty()
    .withMessage("this field is required")
    .isEmail()
    .withMessage("Invalid email"),
  body("professions").notEmpty().withMessage("this field is required"),
  body("description").notEmpty().withMessage("this field is required"),
  body("address").notEmpty().withMessage("this field is required"),
];
