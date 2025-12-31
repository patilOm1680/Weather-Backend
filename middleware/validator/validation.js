import logger from "../../logs/logger.js";

export const validate = (schema) => {
  return (req, res, next) => {

    const { error } = schema.validate(req.body);

    if (error) {
        logger.error({
        code:400,
        message: error.details[0].message,
      })
      return res.status(400).json({
        message: error.details[0].message,
      });
    }

    next();
  };
};
