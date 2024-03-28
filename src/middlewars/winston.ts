import winston from "winston";

export const logger = winston.createLogger({
  transports: [
    new winston.transports.File({
      filename: "error.log",
      level: "error",
      format: winston.format.json(),
    }),
    new winston.transports.Http({
      level: "warn",
      format: winston.format.json(),
    }),
    new winston.transports.Console({
      level: "info",
      format: winston.format.combine(
        winston.format.colorize(),
        winston.format.timestamp(),
        winston.format.simple()
      ),
    }),
  ],
});
