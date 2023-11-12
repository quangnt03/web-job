const { StatusCodes, ReasonPhrases } = require("http-status-codes");

const asyncHandler = require("../utils/AsyncHandler");
const companyService = require("../services/company.service");

module.exports = {
  createCompany: asyncHandler(async (req, res) => {
    try {
      const associatedCompany = await companyService.getCompanyByRecruiter(
        req.user.id
      );

      if (associatedCompany) {
        return res
          .status(StatusCodes.BAD_REQUEST)
          .json({ message: "Account has already associated with a company" });
      }

      const newCompany = await companyService.createCompany(
        req.user.id,
        req.body
      );
      return res.status(StatusCodes.CREATED).json({ data: newCompany });
    } catch (err) {
      console.log(err);
    }
  }),

  getCompanyByAccount: asyncHandler(async (req, res) => {
    const associatedCompany = await companyService.getCompanyByRecruiter(
      req.user.id
    );

    if (!associatedCompany) {
      return res
        .status(StatusCodes.NOT_FOUND)
        .json({ message: "Account has not associated with any company" });
    }
  }),
};
