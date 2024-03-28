import Joi from "joi";

export const teacherPostSchema = {
  body: Joi.object().schema({
    bloodGroup: Joi.string().required(),
    subject: Joi.string().required(),
    empId: Joi.number().required(),
    firstName: Joi.string().required(),
    lastName: Joi.string().required(),
  }),
};
export const teacherUpdateSchema = {
  body: Joi.object().schema({
    bloodGroup: Joi.string(),
    subject: Joi.string(),
    empId: Joi.number(),
    firstName: Joi.string(),
    lastName: Joi.string(),
  }),
  params: Joi.object().schema({
    id: Joi.number().required(),
  }),
};
export const teacherParamsSchema = {
  params: Joi.object().schema({
    id: Joi.number().required(),
  }),
};
