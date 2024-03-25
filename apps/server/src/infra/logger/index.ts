import { blue, cyan, green, red, yellow } from "ansi-colors";
import winston, { createLogger, format, transports } from "winston";

export class Logger {
  private winstonLogger: winston.Logger;

  constructor(context?: string) {
    this.winstonLogger = createLogger({
      level: "info", // Set the log level as needed
      format: format.combine(
        format.timestamp(),
        format.errors({ stack: true }),
        format.simple(),
        format.printf(({ level, message, timestamp, ...meta }) => {
          const contextString = yellow(context ? ` [${context}]` : "");
          const coloredMessage =
            level === "error" ? red(message) : green(message);
          return `${timestamp} ${level.toUpperCase()}${contextString} : ${coloredMessage}`;
        }),
      ),
      transports: [
        new transports.Console(),
        new transports.File({ filename: "logs/error.log", level: "error" }),
        new transports.File({ filename: "logs/combined.log" }),
      ],
    });
  }

  info(message: string, ...meta: any[]): void {
    const formattedMessage = `${message} ${blue(
      meta.map((arg) => JSON.stringify(arg, null, 2)).join(", "),
    )}`;
    this.winstonLogger.info(formattedMessage);
  }

  error(message: string, error?: any): void {
    if (!(error instanceof Error)) {
      const formattedMessage = `${message} ${cyan(JSON.stringify(error, null, 2))}`;
      this.winstonLogger.error(formattedMessage);
      return;
    }

    const { name, stack, ...metadata } = error;

    let _message = stack != null ? stack : `${name}: ${message}`;

    if (metadata != null) {
      _message = `${_message}
      ${cyan(JSON.stringify(metadata))}`;
    }
    this.winstonLogger.error(_message);
  }
}

export const logger = new Logger();
