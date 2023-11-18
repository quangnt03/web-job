const multer = require("multer");
const path = require("path");
const mongoose = require("mongoose");
const ApplicationModel = require("../models/application.model");

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
        const { notes } = req.body;
        const today = new Date();
        const applicationDate = today.toLocaleDateString().split("T")[0];
        console.log("Start uploading to database");
        const application = new ApplicationModel({
          owner: "655274fd867a26ac2e27c00d",
          applicationDate,
          attachment: files.map((file) => file.buffer),
          notes,
          status: "Sent",
        });

        await application.save();

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

// const storage = multer.diskStorage({
//   destination: function (req, file, callback) {
//     const uploadsPath = path.join(__dirname, "..", "uploads");
//     callback(null, uploadsPath);
//   },
//   filename: function (req, file, callback) {
//     callback(null, file.originalname);
//   },
// });
