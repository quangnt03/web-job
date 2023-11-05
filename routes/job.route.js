const express = require("express");
const jobRouter = express.Router();
const jobController = require("../controllers/job.controller");

jobRouter.use("/search", jobController.searchJobByKeyWord);
jobRouter.post("/new", jobController.createNewJob);
jobRouter.post("/created", jobController.getJobListByCompany);
jobRouter.get("/:jobId", jobController.getJobById);
jobRouter.post("/remove/:jobId", jobController.removeJob);
jobRouter.put("/update/:jobId", jobController.updateJob);
jobRouter.get("/", jobController.getAllJobs);

module.exports = jobRouter;
