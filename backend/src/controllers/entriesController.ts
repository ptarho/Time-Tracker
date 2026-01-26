import { Request, Response } from "express";
import { EntriesService } from "@/services/entriesService";
import { HttpStatus } from "@/constants/httpStatus";

const entriesService = new EntriesService();

export class EntriesController {
  async createEntry(req: Request, res: Response): Promise<void> {
    try {
      const entry = await entriesService.createEntry(req.body);
      res.status(HttpStatus.CREATED).json(entry);
    } catch (error) {
      if (error instanceof Error) {
        res.status(HttpStatus.BAD_REQUEST).json({ message: error.message });
      } else {
        res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
          message: "Internal server error",
        });
      }
    }
  }

  async getAllEntries(req: Request, res: Response): Promise<void> {
    try {
      const entries = await entriesService.getAllEntries();
      res.status(HttpStatus.OK).json(entries);
    } catch (error) {
      res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
        message: "Internal server error",
      });
    }
  }
}
