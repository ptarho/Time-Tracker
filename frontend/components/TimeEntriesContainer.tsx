"use client";

import { useState } from "react";
import { TimeEntry } from "@/types/time-entries";
import { TimeEntryForm } from "./TimeEntryForm";
import TimeEntryList from "./TimeEntryList";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/Card";

type Props = {
  initialEntries: TimeEntry[];
};

export default function TimeEntriesContainer({ initialEntries }: Props) {
  const [entries, setEntries] = useState<TimeEntry[]>(initialEntries);

  const handleFormSubmit = async (createdEntry: TimeEntry) => {
    setEntries((prevEntries) => [createdEntry, ...prevEntries]);
  };

  return (
    <Card className="shadow-lg">
      <CardHeader>
        <CardTitle className="text-2xl">New Time Entry</CardTitle>
        <CardDescription>
          Add a new time entry to track your work hours
        </CardDescription>
      </CardHeader>
      <CardContent>
        <TimeEntryForm onSubmit={handleFormSubmit} />
      </CardContent>
      <CardContent>
        <TimeEntryList entries={entries} />
      </CardContent>
    </Card>
  );
}
