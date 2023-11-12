const mongoose = require("mongoose");
const constants = require("@constants");

const userProfileSchema = mongoose.Schema(
  {
    owner: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    name: {
      type: String,
      required: true,
    },
    dob: {
      type: mongoose.Schema.Types.Date,
      required: true,
    },
    gender: {
      type: String,
      required: true,
      enum: constants.genders,
    },
    phone: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    professions: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    picture: String,
    attachment: String,
  },
  { toJSON: { virtuals: true } }
);

const userProfileModel = mongoose.model("UserProfile", userProfileSchema);

module.exports = userProfileModel;
