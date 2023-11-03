const userService = require("../services/user.service");
const asyncHandler = require("../utils/AsyncHandler");

module.exports = {
  getAccount: asyncHandler(async (req, res) => {
    const account = await userService.findUserById(req.user.id);
    delete account.password;
    return res.status(200).json({ account });
  }),
};
