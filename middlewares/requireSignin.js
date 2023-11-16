/* eslint-disable prefer-destructuring */
const jwt = require("jsonwebtoken");
const { StatusCodes } = require("http-status-codes");
const { encrypt } = require("@configs");

module.exports = (req, res, next) => {
  let token;
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    token = req.headers.authorization.split(" ")[1];
  } else {
    return res.status(StatusCodes.UNAUTHORIZED).json({
      message: "Invalid access token",
    });
  }

  try {
    console.log(encrypt);
    const decodedToken = jwt.verify(token, encrypt.jwtSecretRefresh);
    req.user = decodedToken;
    console.log("sign in confirmed");
    return next();
  } catch (error) {
    return res
      .status(StatusCodes.UNAUTHORIZED)
      .json({ message: "Invalid access token" });
  }
};
