const Joi = require('joi');

const id = Joi.string().uuid();
const name = Joi.string().alphanum().min(3).max(15);
const price = Joi.number().min(10);

const getProductSchema = Joi.object({
  id: id.required(),
});

const createProductSchema = Joi.object({
  name: name.required(),
  price: price.required(),
});

const updateProductSchema = Joi.object({
  name: name,
  price: price,
});

module.exports = {
  getProductSchema,
  createProductSchema,
  updateProductSchema,
};
