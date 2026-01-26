import { Response } from "express";
import { HttpStatus, HttpStatusType } from "@/constants/http-statuses";
import logger from "@/lib/logger";

interface ErrorHandlerOptions {
  defaultStatus?: HttpStatusType;
  logPrefix?: string;
  defaultMessage?: string;
}

/**
 * Handles errors in a consistent way across the application
 * @param error - The error to handle
 * @param res - Express response object
 * @param options - Optional configuration for error handling
 */
export default function errorHandler(
  error: unknown,
  res: Response,
  options: ErrorHandlerOptions = {}
): void {
  const {
    defaultStatus = HttpStatus.INTERNAL_SERVER_ERROR,
    logPrefix = "Error",
    defaultMessage = "Internal server error",
  } = options;

  if (error instanceof Error) {
    const logMessage = logPrefix
      ? `${logPrefix}: ${error.message}`
      : error.message;
    logger(logMessage);

    const statusCode = defaultStatus;

    res.status(statusCode).json({
      message: error.message,
    });
  } else {
    logger(`${logPrefix || "Error"}: ${defaultMessage}`);
    res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
      message: defaultMessage,
    });
  }
}
