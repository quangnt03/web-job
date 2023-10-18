const jwt = require('jsonwebtoken');
const { encrypt } = require('../configs');

module.exports = (payload) => {
  const token = jwt.sign(payload, encrypt.jwtSecret, { expiresIn: '1d' });
  return token;
};
