const express = require("express");
const applicantRouter = express.Router();
const applicantController = require("../controllers/applicant.ctr");

applicantRouter.post(`/apply/:jobId`, applicantController.applyJob);

module.exports = applicantRouter;
