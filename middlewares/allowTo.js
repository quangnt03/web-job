const { StatusCodes, ReasonPhrases } = require('http-status-codes');
const constants = require('../constants');

module.exports = (roles) => (req, res, next) => {
  if (req.user.role !== constants.roles.admin && !roles.includes(req.user.role)) {
    return res.status(StatusCodes.UNAUTHORIZED).json({
      status: ReasonPhrases.UNAUTHORIZED,
      msg: 'You do not have permission to access the resource',
    });
  }
  return next();
};
