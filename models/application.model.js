const mongoose = require("mongoose");

const applicationSchema = new mongoose.Schema(
  {
    owner: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    applicationDate: {
      type: String,
      required: true,
    },
    attachment: {
      type: Buffer,
      required: true,
    },
    notes: {
      type: String,
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
