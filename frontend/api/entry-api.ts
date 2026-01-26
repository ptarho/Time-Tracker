"use server";
import { API_ENDPOINTS } from "@/constants";
import apiClient from "./";
import axios from "axios";
import { TimeEntry } from "@/types/time-entries";

export interface CreateTimeEntryRequest {
  date: Date;
  project: string;
  hours: number;
  description: string;
}

export async function createTimeEntry(
  data: CreateTimeEntryRequest
): Promise<TimeEntry> {
  try {
    const response = await apiClient.post<TimeEntry>(
      API_ENDPOINTS.ENTRIES,
      data
    );
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      const errorMessage =
        error.response?.data?.message || "Failed to create time entry";
      throw new Error(errorMessage);
    }
    throw new Error("Failed to create time entry");
  }
}

export async function getAllTimeEntries(): Promise<TimeEntry[]> {
  try {
    const response = await apiClient.get<TimeEntry[]>(API_ENDPOINTS.ENTRIES);
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      const errorMessage =
        error.response?.data?.message || "Failed to fetch time entries";
      throw new Error(errorMessage);
    }
    throw new Error("Failed to fetch time entries");
  }
}
