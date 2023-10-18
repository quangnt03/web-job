const mongoose = require('mongoose');
const { environmentConfig } = require('../configs');

module.exports = async function () {
  await mongoose.connect(environmentConfig.mongoUri);
  console.log('Connected to MongoDB');
};
