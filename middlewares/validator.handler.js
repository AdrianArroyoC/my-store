const boom = require('@hapi/boom');

// Dynamic validator handler
function validatorHandler(schema, property) {
  // closure
  return (req, res, next) => {
    const data = req[property];
    // abort early false is for sending all errors
    const { error } = schema.validate(data, { abortEarly: false });
    if (error) {
      next(boom.badRequest(error));
    }
    next();
  };
}

module.exports = validatorHandler;
