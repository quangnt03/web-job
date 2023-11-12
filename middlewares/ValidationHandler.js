const { validationResult } = require("express-validator");

// sequential processing, stops running validations chain if the previous one fails.
const validate = async (req, res, next) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    const returnErrors = errors
      .array()
      .map(({ msg, path }) => ({ message: msg, path }));
    return res.status(400).json({ errors: returnErrors });
  }
  return next();
};

module.exports = validate;
