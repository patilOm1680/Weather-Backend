import { Router } from "express";
import { getTempByCity } from "../controllers/temp.controller.js";

const router=Router();

router.get('/:city',getTempByCity)

export default router;