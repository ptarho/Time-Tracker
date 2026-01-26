import { Router, Request, Response } from "express";
import { EntriesController } from "@/controllers/entriesController";
import {
  validateTimeEntry,
  handleValidationErrors,
} from "@/middleware/validation";

const router = Router();
const entriesController = new EntriesController();

router.post(
  "/",
  validateTimeEntry,
  handleValidationErrors,
  (req: Request, res: Response) => entriesController.createEntry(req, res)
);

router.get("/", (req: Request, res: Response) =>
  entriesController.getAllEntries(req, res)
);

export default router;
