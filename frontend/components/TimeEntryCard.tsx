import { TimeEntry } from "@/types/time-entries";
import { format } from "date-fns";
import { Calendar, Clock } from "lucide-react";

type Props = {
  entry: TimeEntry;
};

export default function TimeEntryCard({ entry }: Props) {
  return (
    <div className="bg-white dark:bg-black/50 rounded-lg shadow-md p-4 border border-zinc-200 dark:border-zinc-700 hover:shadow-lg transition-shadow">
      <div className="flex flex-col gap-3">
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-50">
              {entry.project}
            </h3>
            <p className="text-sm text-zinc-600 dark:text-zinc-400 mt-1">
              {entry.description}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-4 text-sm text-zinc-500 dark:text-zinc-400">
          <div className="flex items-center gap-1.5">
            <Calendar className="h-4 w-4" />
            <span>{format(new Date(entry.date), "dd MMM yyyy")}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Clock className="h-4 w-4" />
            <span>
              {entry.hours} {entry.hours === 1 ? "hour" : "hours"}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
