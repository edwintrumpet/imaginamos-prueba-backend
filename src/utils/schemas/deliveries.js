const Joi = require('@hapi/joi');

const userIdSchema = Joi.string().regex(/^[0-9a-fA-F]{24}$/);
const yearSchema = Joi.number().min(1000).max(9999);
const monthSchema = Joi.string().regex(/^(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)$/);
const daySchema = Joi.number().min(1).max(31);
const hourSchema = Joi.number().min(0).max(23);
const minuteSchema = Joi.number().min(0).max(59);
const clientNameSchema = Joi.object({
  firstName: Joi.string().required(),
  lastName: Joi.string().required(),
});
const clientEmailSchema = Joi.string().email();
const clientPhoneSchema = Joi.string();
const addressSchema = Joi.string();
const deliveryDateSchema = Joi.object({
  year: yearSchema.required(),
  month: monthSchema.required(),
  day: daySchema.required(),
  hour: hourSchema.required(),
  minute: minuteSchema.required(),
});
const waitTimeSchema = Joi.number().min(1).max(8);

const createDeliverySchema = {
  name: clientNameSchema.required(),
  email: clientEmailSchema.required(),
  phone: clientPhoneSchema.required(),
  address: addressSchema.required(),
  deliveryDate: deliveryDateSchema.required(),
  waitTime: waitTimeSchema.required(),
};

const getFilterSchema = {
  year: yearSchema,
  month: monthSchema,
  day: daySchema,
};

module.exports = {
  userIdSchema,
  createDeliverySchema,
  getFilterSchema,
};
