const exceptionHandler = (error, _, res, next) => {
  if (error) {
    return res.status(error.status || 500).json({
      success: false,
      msg: error.message,
    });
  }
  return next();
};

module.exports = exceptionHandler;
