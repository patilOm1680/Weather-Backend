import routes from "../routes/index.js";
import express from "express";
import logger from "../logs/logger.js";

import dotenv from "dotenv";
dotenv.config();

const app = express();

app.use(express.json());

app.use((req, res, next) => {
  logger.http(`${req.method} ${req.url}`);
  next();
});

app.use("/", routes);

export default app;
