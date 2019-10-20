/* eslint-disable consistent-return */
// eslint-disable-next-line no-unused-vars
const errorHandler = (error, req, res, next) => {
  const errorHelper = () => {
    const { name, status, message } = error;

    res.status(status).json({
      name: name || 'InternalServerError',
      status: status || 500,
      message: message || 'Internal server error'
    });
  };

  // Conditions
  if (error) {
    // eslint-disable-next-line no-console
    console.log(error);

    return errorHelper();
  }
};

module.exports = errorHandler;
