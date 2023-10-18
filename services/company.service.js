const CompanyModel = require('../models/company.model');

module.exports = {
  async createCompany(recruiter, company) {
    const newCompany = await CompanyModel.create({
      recruiter,
      ...company,
    });
    return newCompany;
  },
};
