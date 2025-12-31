import app from "./app.js"
import logger from "../middleware/logs/logger.js";

const portNo=process.env.PORT || 3000;

app.listen(portNo,()=>console.log(`server is running on port ${portNo}`))
logger.info(`Server is running on port ${portNo}`)
