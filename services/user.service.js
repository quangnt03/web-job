const UserModel = require("@models/user.model");

module.exports = {
  async createUser(body) {
    const newUser = await UserModel.create(body);
    const user = newUser.toObject();
    return user;
  },

  async findUserByEmail(email) {
    const user = await UserModel.findOne({ email });
    return user || null;
  },

  async findUserById(userId) {
    const user = await UserModel.findById(userId);
    return user || null;
  },

  async associateUserAndProfile(userId, profileId) {
    const user = await this.findUserById(userId);
    user.associatedProfile = profileId;
    await user.save();
    return user;
  },

  async associateUserAndCompany(userId, companyId) {
    const user = await this.findUserById(userId);
    user.associatedCompany = companyId;
    await user.save();
    return user;
  },
};
