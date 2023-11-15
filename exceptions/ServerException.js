const { StatusCodes, ReasonPhrases } = require('http-status-codes');

class ServerException extends Error {
  constructor(message) {
    super(message);
    this.name = this.constructor.name;
    this.status = StatusCodes.INTERNAL_SERVER_ERROR;
    this.statusMessage = ReasonPhrases.INTERNAL_SERVER_ERROR;
  }
}

module.exports = ServerException;
