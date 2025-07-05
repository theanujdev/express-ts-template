import winston from "winston";
import { config } from "./index";

const logger = winston.createLogger({
  level: "info",
  defaultMeta: { service: "express-ts-template" },
  format: winston.format.combine(
    winston.format.timestamp(),
    winston.format.json(),
  ),
  transports: [
    new winston.transports.File({
      dirname: "logs",
      filename: "error.log",
      level: "error",
      silent: config.IS_TEST,
    }),
    new winston.transports.File({
      dirname: "logs",
      filename: "combined.log",
      level: "info",
      silent: config.IS_TEST,
    }),
  ],
});

// If we are in development then log to the console with simple format:
// `${info.level}: ${info.message} JSON.stringify({ ...rest })`
if (config.IS_DEV) {
  logger.add(
    new winston.transports.Console({
      level: "info",
      format: winston.format.simple(),
    }),
  );
}

export default logger;
