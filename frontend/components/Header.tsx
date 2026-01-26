import { ThemeSwitcher } from "@/components/ui/ThemeSwitcher";

export default function Header() {
  return (
    <header className="flex w-full border-b border-zinc-200/50 dark:border-zinc-800/50 bg-white/80 dark:bg-zinc-950/80 backdrop-blur-sm sticky top-0 z-10">
      <div className="container px-6 py-2">
        <div className="flex flex-col">
          <h1 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
            Viso Time Tracker
          </h1>
          <p className="text-sm text-zinc-600 dark:text-zinc-400">
            Track your time and manage your projects efficiently
          </p>
        </div>
      </div>
      <ThemeSwitcher className="my-auto ml-auto mr-6" />
    </header>
  );
}
