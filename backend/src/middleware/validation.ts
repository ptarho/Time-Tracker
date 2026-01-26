import { Request, Response, NextFunction } from "express";
import { body, validationResult } from "express-validator";
import { HttpStatus } from "@/constants/http-statuses";

export const validateTimeEntry = [
  body("date")
    .notEmpty()
    .withMessage("Date is required")
    .isISO8601()
    .withMessage("Date must be a valid ISO 8601 date"),
  body("project")
    .notEmpty()
    .withMessage("Project is required")
    .trim()
    .isLength({ min: 1 })
    .withMessage("Project cannot be empty"),
  body("hours")
    .notEmpty()
    .withMessage("Hours is required")
    .isFloat({ min: 0.01 })
    .withMessage("Hours must be a positive number"),
  body("description")
    .notEmpty()
    .withMessage("Description is required")
    .trim()
    .isLength({ min: 1 })
    .withMessage("Description cannot be empty"),
];

export const handleValidationErrors = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(HttpStatus.BAD_REQUEST).json({
      message: "Validation failed",
      errors: errors.array(),
    });
  }
  next();
};
