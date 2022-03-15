'use strict';
// This is an example for more information go to: https://joi.dev/api/

const Joi = require('joi');

const mySchema = Joi.object({
  username: Joi.required(),
  password: Joi.required(),
});

module.exports = {
  mySchema,
};
