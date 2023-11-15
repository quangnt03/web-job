exports.environmentConfig = {
  PORT: process.env.PORT || 3000,
  mongoUri: `${process.env.MONGO_URI}/${process.env.MONGO_DB}`,
  environment: process.env.ENV,
};

exports.encrypt = {
  salt: process.env.SALT_WORK_FACTOR || 10,
  jwtSecretAccess: process.env.JWT_SECRET_ACCESS,
  jwtSecretRefresh: process.env.JWT_SECRET_REFRESH,
};
