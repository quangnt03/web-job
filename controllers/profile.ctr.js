const { StatusCodes } = require("http-status-codes");
const asyncHandler = require("@utils/AsyncHandler");
const profileService = require("../services/profile.service");

module.exports = {
  createUserProfile: asyncHandler(async (req, res) => {
    try {
      const existingUserProfile = await profileService.findProfileByUserId(
        req.user.id
      );
      if (existingUserProfile) {
        return res.status(StatusCodes.BAD_REQUEST).json({
          message: "User profile has already existed",
        });
      }

      const newProfile = await profileService.createUserProfile(
        req.user.id,
        req.body
      );

      return res.status(StatusCodes.CREATED).json({
        data: newProfile,
      });
    } catch (error) {
      console.log(error);
    }
  }),

  getAccountProfile: asyncHandler(async (req, res) => {
    const existingUserProfile = await profileService.findProfileByUserId(
      req.user.id
    );

    if (!existingUserProfile) {
      return res.status(StatusCodes.NOT_FOUND).json({
        message: "User profile does not exist",
      });
    }

    return res.status(StatusCodes.CREATED).json({
      data: existingUserProfile,
    });
  }),
};
