import { Router } from "express";
import { getWeatherByCity } from "../controllers/weather.controller.js";
import { validate } from "../middleware/validator/validation.js";
import { citySchema } from "../middleware/validator/city.schema.js";

const router=Router();
router.get('/',validate(citySchema),getWeatherByCity);

export default router;
