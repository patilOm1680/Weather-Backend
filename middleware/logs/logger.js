import winston from 'winston';
const { combine, timestamp, json } = winston.format;

const customLevels = {
  error: 0,
  warn: 1,
  info: 2,
  http: 3
};
const logger = winston.createLogger({
  level: customLevels,
  format: combine(timestamp(), json()),
  transports: [
    new winston.transports.File({
      filename: './middleware/logs/combined.log',
      level: 'http'  
    }),
  ],
});

export default logger;
