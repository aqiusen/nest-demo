import Joi = require('@hapi/joi');

/**
 * alphanum--0-9 a-z A-Z
 * 最少3位，最长10位，必传
 */
export const saveCatSchema = Joi.object({
  name: Joi.string().alphanum().min(3).max(10).required(),
  age: Joi.number().required(),
});
