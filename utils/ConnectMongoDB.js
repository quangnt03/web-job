const mongoose = require("mongoose");
const { environmentConfig } = require("@configs");

module.exports = async function () {
  console.log(environmentConfig.mongoUri);
  await mongoose.connect(environmentConfig.mongoUri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  console.log("Connected to MongoDB");
};
