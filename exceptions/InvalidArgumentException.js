const { StatusCodes, ReasonPhrases } = require('http-status-codes');

class InvalidArgumentException extends Error {
  constructor(message) {
    super(message);
    this.name = this.constructor.name;
    this.status = StatusCodes.BAD_REQUEST;
    this.statusMessage = ReasonPhrases.BAD_REQUEST;
    // Error.captureStackTrace(this, this.constructor);
  }
}

module.exports = InvalidArgumentException;
