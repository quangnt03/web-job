const CompanyModel = require("../models/company.model");
const userService = require("./user.service");

module.exports = {
  async createCompany(owner, company) {
    const newCompany = await CompanyModel.create({
      ...company,
      owner,
    });

    const targetUser = await userService.findUserById(owner);
    targetUser.associatedCompany = newCompany._id;
    await targetUser.save();

    return newCompany;
  },
  async getCompanyByRecruiter(recruiter) {
    const company = await CompanyModel.findOne({
      owner: recruiter,
    });
    return company || null;
  },
};
