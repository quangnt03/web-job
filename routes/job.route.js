const express = require("express");
const jobRouter = express.Router();
const jobController = require("../controllers/job.controller");

jobRouter.use("/search", jobController.searchJobByKeyWord);
jobRouter.get("/:jobId", jobController.getJobById);
jobRouter.get("/", jobController.getAllJobs);
module.exports = jobRouter;
