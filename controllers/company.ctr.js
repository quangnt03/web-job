const { StatusCodes, ReasonPhrases } = require("http-status-codes");

const asyncHandler = require("../utils/AsyncHandler");
const companyService = require("../services/company.service");
const ApplicationModel = require("../models/application.model");
const userProfileModel = require("../models/profile.model");

module.exports = {
  createCompany: asyncHandler(async (req, res) => {
    const associatedCompany = await companyService.getCompanyByRecruiter(
      req.user.id
    );

    if (associatedCompany) {
      return res
        .status(StatusCodes.BAD_REQUEST)
        .json({ message: "Account has already associated with a company" });
    }

    const newCompany = await companyService.create(req.user.id, req.body);
    return res.status(StatusCodes.CREATED).json({ data: newCompany });
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

  //Find applications of a specific job
  async getApplicationListByJob(req, res) {
    try {
      const { jobId } = req.params;
      const jobApplications = await ApplicationModel.find({
        appliedJob: jobId,
      });
      if (!jobApplications) {
        throw new Error("Data not found");
      }
      console.log("Applications:", jobApplications);

      const applicantDataPromises = jobApplications.map(async (application) => {
        const applicantData = await userProfileModel.findOne({
          owner: application.owner,
        });
        return {
          application,
          applicantData,
        };
      });

      const results = await Promise.all(applicantDataPromises);
      console.log("Result", results);
      res.json(results);
      // const applicantData = await userProfileModel.find({
      //   owner:
      // })
      // res.json(jobApplications);
    } catch (err) {
      return res
        .status(400)
        .json({ success: false, error: "An error occurred" });
    }
  },

  //Decline a job application
  async declineJob(req, res) {
    try {
      console.log("start");
      const applicationId = req.params.applicationId;
      const jobId = req.params.jobId;
      console.log("application id", applicationId);
      console.log("jobId", jobId);
      const declinedApplication = await ApplicationModel.findByIdAndUpdate(
        applicationId,
        { status: "declined" },
        { new: true }
      );
      if (declinedApplication) {
        return res.status(200).json({ message: "Application declined" });
      } else {
        return res.status(404).json({ error: "Application not found" });
      }
    } catch (error) {
      console.error("Error declining job application:", error);
      return res.status(500).json({ error: "Server error" });
    }
  },
};
