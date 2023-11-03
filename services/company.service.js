const CompanyModel = require("../models/company.model");

module.exports = {
  async createCompany(recruiter, company) {
    const newCompany = await CompanyModel.create({
      owner: recruiter,
      ...company,
    });
    return newCompany;
  },
  async getCompanyByRecruiter(recruiter) {
    const company = await CompanyModel.find({
      owner: recruiter,
    });
    return company;
  },
};
