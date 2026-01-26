import Header from "@/components/Header";
import { getAllTimeEntries } from "@/api/entry-api";
import TimeEntriesContainer from "@/components/TimeEntriesContainer";

export default async function Home() {
  const entries = await getAllTimeEntries();

  return (
    <div className="flex flex-col min-h-screen bg-linear-to-b from-zinc-50 to-white dark:from-black dark:to-zinc-950">
      <Header />
      <main className="flex-1 w-full bg-zinc-200/50 dark:bg-zinc-950/50">
        <div className="container py-8 sm:py-12 mx-auto">
          <div className="max-w-3xl mx-auto">
            <TimeEntriesContainer initialEntries={entries} />
          </div>
        </div>
      </main>
    </div>
  );
}
