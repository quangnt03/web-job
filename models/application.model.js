const mongoose = require("mongoose");

const applicationSchema = new mongoose.Schema(
  {
    owner: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    applicationDate: {
      type: Date,
      required: true,
    },
    attachment: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      required: true,
    },
  },
  { toJSON: { virtuals: true } },
  { timestamps: true }
);

const ApplicationModel = mongoose.model(
  "Application",
  applicationSchema,
  "applications"
);

module.exports = ApplicationModel;
