const mongoose = require("mongoose");
const { Schema } = mongoose;

const jobFieldSchema = new Schema({
  field: String,
});

const JobFieldModel = mongoose.model("JobField", jobFieldSchema);

module.exports = JobFieldModel;
