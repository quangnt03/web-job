const { StatusCodes, ReasonPhases } = require('http-status-codes');
const userService = require('../services/user.service');

module.exports = async (req, res, next) => {
  const user = await userService.findUserById(req.user.id);

  if (!user.isActive) {
    return res.status(StatusCodes.FORBIDDEN).json({
      status: ReasonPhases.FORBIDDEN,
      msg: 'Your account is not active',
    });
  }
  return next();
};
