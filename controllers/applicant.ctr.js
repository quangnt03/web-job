const multer = require("multer");
const path = require("path");
const mongoose = require("mongoose");
const ApplicationModel = require("../models/application.model");
const userProfileModel = require("../models/profile.model");
const RecruitmentNewsModel = require("../models/job.model");

//Apply for a job
const applyJob = async (req, res) => {
  try {
    const storage = multer.memoryStorage();
    const upload = multer({ storage: storage }).array("file");

    upload(req, res, async (err) => {
      if (err) {
        console.error("Error uploading files:", err);
        return res.status(500).json({ error: "File upload failed" });
      }

      //Send data to MongoDB
      try {
        const files = req.files;

        const { notes, userId } = req.body;
        console.log(userId);
        const today = new Date();
        const applicationDate = today.toLocaleDateString().split("T")[0];
        const { jobId } = req.params;
        const application = new ApplicationModel({
          owner: userId,
          appliedJob: jobId,
          applicationDate,
          attachment: files.map((file) => file.buffer),
          notes,
          status: "Sent",
        });

        await application.save();
        //Add user id to the applicants' array in RecruitentNewsModel

        const recruitmentNews = await RecruitmentNewsModel.findOneAndUpdate(
          { _id: jobId },
          { $addToSet: { applicants: userId } },
          { new: true }
        );

        return res.json({
          message: "File(s) uploaded and application saved successfully",
        });
      } catch (err) {
        console.error("Error processing application:", err);
        return res.status(500).json({ error: "Application processing failed" });
      }
    });
  } catch (err) {
    console.error("Error setting up file upload:", err);
    return res.status(500).json({ error: "File upload setup failed" });
  }
};

module.exports = { applyJob };
