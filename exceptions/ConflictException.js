const { StatusCodes, ReasonPhrases } = require('http-status-codes');

class ConflictException extends Error {
  constructor(message) {
    super(message);
    this.name = this.constructor.name;
    this.status = StatusCodes.CONFLICT;
    this.statusMessage = ReasonPhrases.CONFLICT;
    Error.captureStackTrace(this, this.constructor);
  }
}

module.exports = ConflictException;
