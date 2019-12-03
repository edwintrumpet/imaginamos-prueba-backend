const Joi = require('@hapi/joi');

const userIdSchema = Joi.string().regex(/^[0-9a-fA-F]{24}$/);
const clientNameSchema = Joi.object({
  firstName: Joi.string().required(),
  lastName: Joi.string().required(),
});
const clientEmailSchema = Joi.string().email();
const clientPhoneSchema = Joi.string();
const addressSchema = Joi.string();
const deliveryDateSchema = Joi.string().regex(/^\d{4}-\d{2}-\d{2}$/);
const deliveryTimeSchema = Joi.object({
  time: Joi.number().min(0).max(23),
  range: Joi.number().min(1).max(8),
});

const createDeliverySchema = {
  name: clientNameSchema.required(),
  email: clientEmailSchema.required(),
  phone: clientPhoneSchema.required(),
  address: addressSchema.required(),
  deliveryDate: deliveryDateSchema.required(),
  deliveryTime: deliveryTimeSchema.required(),
};

const getDeliverySchema = {
  userId: userIdSchema.required(),
  date: deliveryDateSchema.required(),
};

module.exports = {
  createDeliverySchema,
  getDeliverySchema,
};

