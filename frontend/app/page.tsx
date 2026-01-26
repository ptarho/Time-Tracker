import { TimeEntryForm } from "../components/TimeEntryForm";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/Card";
import Header from "@/components/Header";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-zinc-50 to-white dark:from-black dark:to-zinc-950">
      <Header />
      <main className="flex-1 w-full bg-zinc-200/50 dark:bg-zinc-950/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
          <div className="max-w-2xl mx-auto">
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl">New Time Entry</CardTitle>
                <CardDescription>
                  Add a new time entry to track your work hours
                </CardDescription>
              </CardHeader>
              <CardContent>
                <TimeEntryForm />
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
}
