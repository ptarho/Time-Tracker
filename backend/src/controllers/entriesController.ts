import { Request, Response } from "express";
import { EntriesService } from "@/services/entriesService";
import { HttpStatus } from "@/constants/http-statuses";
import errorHandler from "@/lib/errorHandler";

const entriesService = new EntriesService();

export class EntriesController {
  async createEntry(req: Request, res: Response): Promise<void> {
    try {
      const entry = await entriesService.createEntry(req.body);
      res.status(HttpStatus.CREATED).json(entry);
    } catch (error) {
      errorHandler(error, res, { logPrefix: "Error creating entry" });
    }
  }

  async getAllEntries(req: Request, res: Response): Promise<void> {
    try {
      const entries = await entriesService.getAllEntries();
      res.status(HttpStatus.OK).json(entries);
    } catch (error) {
      errorHandler(error, res, { logPrefix: "Error fetching entries" });
    }
  }
}
