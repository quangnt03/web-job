const ProfileModel = require('@models/profile.model');

module.exports = {
  async findProfileByUserId(userId) {
    const userProfile = await ProfileModel.findOne({
      user: userId,
    });

    return userProfile || null;
  },

  async createUserProfile(user, profile) {
    console.log(user, profile);
    const newUserProfile = await ProfileModel.create({
      user,
      ...profile,
    });

    return newUserProfile;
  },
};
