const mongoose = require("mongoose");
const mongoosePaginate = require("mongoose-paginate-v2");

const jobSchema = new mongoose.Schema(
  {
    title: String,
    company: String,
    createdAt: Date,
    closedDate: Date,
    salary: String,
    location: String,
    field: String,
    position: String,
    status: String,
    maxApplicants: Number,
    description: String,
    applicants: Array,
  },
  { toJSON: { virtuals: true } },
  { timestamps: true }
);
jobSchema.plugin(mongoosePaginate);

const JobModel = mongoose.model("Job", jobSchema, "AllJobs");

module.exports = JobModel;
