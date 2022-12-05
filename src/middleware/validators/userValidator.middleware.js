const Joi = require('joi'); 
const Role = require('../../utils/userRoles.utils');

exports.userSchemas = { 
  create: Joi.object({
    username: Joi.string().required().min(3).max(25),
    fullname: Joi.string().required().min(3).max(50),
    role: Joi.string().valid(Role.Admin, Role.User, Role.Programmer).required(),
    password: Joi.string().min(3).required().label('Password'),
    confirmPassword: Joi.any().equal(Joi.ref('password'))
        .required()
        .label('Confirm password')
        .messages({ 'any.only': '{{#label}} does not match' })
  }),

  update: Joi.object({
    username: Joi.string().required().min(3).max(25),
    fullname: Joi.string().required().min(3).max(50),
    role: Joi.string().valid(Role.Admin, Role.User, Role.Programmer).required(),
    password: Joi.string().min(3).label('Password').empty(''),
    confirmPassword: Joi.any().equal(Joi.ref('password')).empty('')
        .label('Confirm password')
        .messages({ 'any.only': '{{#label}} does not match' })
  }),

  login: Joi.object({
    role: Joi.number().required(),
    password: Joi.string().required(),
  }), 
};