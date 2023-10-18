exports.environmentConfig = {
  PORT: process.env.PORT || 3000,
  mongoUri: process.env.MONGO_URI,
  environment: process.env.ENV,
};

exports.encrypt = {
  salt: process.env.SALT_WORK_FACTOR || 10,
  jwtSecret: process.env.JWT_SECRET,
};
