const { ReasonPhrases, StatusCodes } = require('http-status-codes');
const asyncHandler = require('@utils/AsyncHandler');
const profileService = require('../services/profile.service');

module.exports = {
  createUserProfile: asyncHandler(async (req, res) => {
    const existingUserProfile = await profileService.findProfileByUserId(req.user.id);
    if (existingUserProfile) {
      console.log(existingUserProfile);
      return res.status(StatusCodes.BAD_REQUEST).json({
        status: ReasonPhrases.BAD_REQUEST,
        msg: 'User profile has already existed',
      });
    }

    const newProfile = await profileService.createUserProfile(req.user.id, req.body);

    return res.status(StatusCodes.CREATED).json({
      success: true,
      data: newProfile,
    });
  }),
};
