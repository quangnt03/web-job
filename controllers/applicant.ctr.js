const multer = require("multer");
const path = require("path");

const applyJob = (req, res) => {
  console.log("start");
  const storage = multer.diskStorage({
    destination: function (req, file, callback) {
      const uploadsPath = path.join(__dirname, "..", "uploads");
      callback(null, uploadsPath);
    },
    filename: function (req, file, callback) {
      callback(null, file.originalname);
    },
  });

  const upload = multer({ storage: storage });

  upload.array("files")(req, res, (err) => {
    if (err) {
      console.error("Error uploading files:", err);
      res.status(500).json({ error: "File upload failed" });
    } else {
      console.log(req.body);
      console.log(req.files);
      res.json({ message: "File(s) uploaded successfully" });
    }
  });
};

module.exports = { applyJob };
