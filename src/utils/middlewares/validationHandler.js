const Boom = require('@hapi/boom');
const Joi = require('@hapi/joi');

const validate = (data, schema) => {
  const { error } = Joi.object(schema).validate(data, schema);
  return error;
};

const validationHandler = (schema, check = 'body') => (req, res, next) => {
  const error = validate(req[check], schema);
  if (error) {
    next(Boom.badRequest(error));
  } else {
    next();
  }
};

module.exports = validationHandler;
