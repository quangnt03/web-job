const { StatusCodes, ReasonPhrases } = require('http-status-codes');

class UnprocessableEntityException extends Error {
  constructor(message) {
    super(message);
    this.name = this.constructor.name;
    this.status = StatusCodes.UNPROCESSABLE_ENTITY;
    this.statusMessage = ReasonPhrases.UNPROCESSABLE_ENTITY;
    // Error.captureStackTrace(this, this.constructor);
  }
}

module.exports = UnprocessableEntityException;
