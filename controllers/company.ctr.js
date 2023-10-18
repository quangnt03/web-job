const { StatusCodes, ReasonPhrases } = require('http-status-codes');

const asyncHandler = require('../utils/AsyncHandler');
const companyService = require('../services/company.service');

module.exports = {
  createCompany: asyncHandler(async (req, res) => {
    const newCompany = await companyService.create(req.user.id, req.body);
    return res.status(StatusCodes.CREATED).json({
      status: ReasonPhrases.CREATED,
      data: newCompany,
    });
  }),
};
