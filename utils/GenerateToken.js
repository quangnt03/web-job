const jwt = require("jsonwebtoken");
const config = require("../configs");

module.exports = function (payload) {
  return jwt.sign(payload, config.encrypt.jwtSecretAccess, {
    expiresIn: "15s",
  });
};
