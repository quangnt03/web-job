const ProfileModel = require("@models/profile.model");
const { default: mongoose } = require("mongoose");
const userService = require("./user.service");

module.exports = {
  async findProfileByUserId(userId) {
    const userProfile = await ProfileModel.findOne({
      owner: userId,
    });

    return userProfile || null;
  },

  async createUserProfile(user, profile) {
    const owner = new mongoose.Types.ObjectId(user);
    const newUserProfile = await ProfileModel.create({
      ...profile,
      owner,
    });

    const targetUser = await userService.findUserById(owner);
    targetUser.associatedProfile = newUserProfile._id;

    await targetUser.save();

    return newUserProfile;
  },
};
