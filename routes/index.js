import { Router } from "express";
import weatherRoutes from "./weather.route.js"
import tempRoutes from "./temp.route.js"
const router=Router();

router.use('/weather',weatherRoutes)
router.use('/temp',tempRoutes)

export default router;
