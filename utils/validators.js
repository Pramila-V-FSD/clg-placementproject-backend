const Joi = require('joi');

exports.validateUser = (user) => {
  const schema = Joi.object({
    name: Joi.string().required(),
    email: Joi.string().email().required(),
    password: Joi.string().min(6).required(),
    role: Joi.string().valid('student', 'company', 'admin').required()
  });
  
  return schema.validate(user);
};

exports.validateJob = (job) => {
  const schema = Joi.object({
    title: Joi.string().required(),
    description: Joi.string().required(),
    requirements: Joi.array().items(Joi.string()),
    location: Joi.string().required()
  });
  
  return schema.validate(job);
};