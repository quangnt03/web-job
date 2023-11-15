const { StatusCodes, ReasonPhrases } = require('http-status-codes');

class ResourceNotFoundException extends Error {
  constructor(message) {
    super(message);
    this.name = this.constructor.name;
    this.status = StatusCodes.NOT_FOUND;
    this.statusMessage = ReasonPhrases.NOT_FOUND;
    // Error.captureStackTrace(this, this.constructor);
  }
}

module.exports = ResourceNotFoundException;
