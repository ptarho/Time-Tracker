import { TimeEntry } from "@/types/time-entries";
import TimeEntryCard from "./TimeEntryCard";
import { useMemo } from "react";
import { format } from "date-fns";

type Props = {
  entries: TimeEntry[];
};

type GroupedEntries = {
  date: Date;
  entries: TimeEntry[];
  totalHours: number;
};

export default function TimeEntryList({ entries }: Props) {
  // TODO: refactor to optimize performance
  const groupedEntries = useMemo(() => {
    const groups = new Map<string, TimeEntry[]>();

    entries.forEach((entry) => {
      const entryDate = new Date(entry.date);
      const dateKey = format(entryDate, "yyyy-MM-dd");

      if (!groups.has(dateKey)) {
        groups.set(dateKey, []);
      }
      groups.get(dateKey)!.push(entry);
    });

    const grouped: GroupedEntries[] = Array.from(groups.entries())
      .map(([dateKey, dayEntries]) => {
        const date = new Date(dateKey);
        const totalHours = dayEntries.reduce(
          (sum, entry) => sum + entry.hours,
          0
        );
        return {
          date,
          entries: dayEntries,
          totalHours,
        };
      })
      .sort((a, b) => b.date.getTime() - a.date.getTime());

    return grouped;
  }, [entries]);

  const totalHours = useMemo(
    () => entries.reduce((acc, entry) => acc + entry.hours, 0),
    [entries]
  );

  return (
    <div className="flex flex-col gap-6">
      {groupedEntries.map((group) => (
        <div
          key={format(group.date, "yyyy-MM-dd")}
          className="flex flex-col gap-3"
        >
          <div className="flex items-center justify-between px-2 py-2 border-b border-zinc-200 dark:border-zinc-700">
            <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-50">
              {format(group.date, "EEEE, MMMM dd, yyyy")}
            </h3>
            <div className="text-sm font-medium text-zinc-600 dark:text-zinc-400">
              Total: {group.totalHours.toFixed(2)}{" "}
              {group.totalHours === 1 ? "hour" : "hours"}
            </div>
          </div>
          <div className="flex flex-col gap-3 pl-2">
            {group.entries.map((entry) => (
              <TimeEntryCard key={entry.id} entry={entry} />
            ))}
          </div>
        </div>
      ))}
      {entries.length > 0 && (
        <div className="mt-4 pt-4 border-t border-zinc-200 dark:border-zinc-700">
          <div className="text-right text-lg font-semibold text-zinc-900 dark:text-zinc-50">
            Grand Total: {totalHours.toFixed(2)}{" "}
            {totalHours === 1 ? "hour" : "hours"}
          </div>
        </div>
      )}
    </div>
  );
}
