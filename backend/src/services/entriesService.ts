import prisma from "@/lib/prisma";

export interface CreateTimeEntryInput {
  date: string;
  project: string;
  hours: number;
  description: string;
}

export interface TimeEntry {
  id: number;
  date: Date;
  project: string;
  hours: number;
  description: string;
  createdAt: Date;
  updatedAt: Date;
}

export class EntriesService {
  async createEntry(input: CreateTimeEntryInput): Promise<TimeEntry> {
    const entryDate = new Date(input.date);

    // Check total hours for the date
    const existingEntries = await prisma.timeEntry.findMany({
      where: {
        date: entryDate,
      },
    });

    const totalHours = existingEntries.reduce(
      (sum, entry) => sum + entry.hours,
      0
    );
    const newTotalHours = totalHours + input.hours;

    if (newTotalHours > 24) {
      throw new Error(
        `Cannot add ${input.hours} hours. Total hours for ${
          input.date
        } would exceed 24 hours (current: ${totalHours.toFixed(2)} hours)`
      );
    }

    const entry = await prisma.timeEntry.create({
      data: {
        date: entryDate,
        project: input.project,
        hours: input.hours,
        description: input.description,
      },
    });

    return entry;
  }

  async getAllEntries(): Promise<TimeEntry[]> {
    const entries = await prisma.timeEntry.findMany({
      orderBy: {
        date: "desc",
      },
    });

    return entries;
  }
}
