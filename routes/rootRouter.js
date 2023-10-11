const express = require("express");
const rootRouter = express.Router();
const jobRouter = require("../routes/job.route");

rootRouter.use("/job", jobRouter);

module.exports = rootRouter;
