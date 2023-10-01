const mongoose = require('mongoose');
const { environmentConfig } = require('@configs');

module.exports = async function () {
  console.log(environmentConfig.mongoUri);
  await mongoose.connect(environmentConfig.mongoUri);
  console.log('Connected to MongoDB');
};
