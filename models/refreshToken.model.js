const mongoose = require("mongoose");

const tokenSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Types.ObjectId,
      ref: "User",
      required: true,
    },
    token: {
      type: String,
      required: true,
    },
  },
  { toJSON: { virtuals: true } }
);

const tokenModel = mongoose.model("UserRefreshToken", tokenSchema);

module.exports = tokenModel;
