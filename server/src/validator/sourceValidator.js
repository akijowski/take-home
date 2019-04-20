import Joi from 'joi';

const fullSchema = Joi.object().keys({
  id: Joi.string().guid(),
  name: Joi.string().required(),
  environment: Joi.string().required(),
  encoding: Joi.string().required(),
  created_at: Joi.date(),
  updated_at: Joi.date(),
  deleted_at: Joi.date()
});

export const validateSource = (source) => {
  let result = Joi.validate(source, fullSchema);
  let errorMessage = result.error ? result.error.details.map(d => d.message).join(' -- ') : null;
  return {
    isValid: result.error === null,
    errorMessage
  };
}
