const Boom = require('@hapi/boom');

const validate = () => false;

const validationHandler = (schema, check = 'body') => (req, res, next) => {
  const error = validate(req[check], schema);
  error ? next(Boom.badRequest(error)) : next();
};

module.exports = validationHandler;
