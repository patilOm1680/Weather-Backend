import Joi from "joi";

export const citySchema = Joi.object({
  city: Joi.string().min(2).required()
});
