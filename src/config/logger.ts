import winston from "winston";
import { Config } from ".";

const IS_TEST_ENV = Config.NODE_ENV === "test";

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
      silent: IS_TEST_ENV,
    }),
    new winston.transports.File({
      dirname: "logs",
      filename: "combined.log",
      level: "info",
      silent: IS_TEST_ENV,
    }),
  ],
});

// If we are in development then log to the console with simple format:
// `${info.level}: ${info.message} JSON.stringify({ ...rest })`
if (Config.NODE_ENV === "development") {
  logger.add(
    new winston.transports.Console({
      level: "info",

      format: winston.format.simple(),
    }),
  );
}

export default logger;
