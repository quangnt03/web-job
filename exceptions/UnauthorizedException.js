const { StatusCodes, ReasonPhrases } = require('http-status-codes');

class UnauthorizedException extends Error {
  constructor(message) {
    super(message);
    this.name = this.constructor.name;
    this.status = StatusCodes.UNAUTHORIZED;
    this.statusMessage = ReasonPhrases.UNAUTHORIZED;
    // Error.captureStackTrace(this, this.constructor);
  }
}

module.exports = UnauthorizedException;
