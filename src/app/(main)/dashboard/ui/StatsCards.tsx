"use client";
import { Flame, Award, TrendingUp } from "lucide-react";
import type { Stats } from "../logic";

const cards = [
  {
    key: "streak",
    label: "Day Streak",
    icon: Flame,
  },
  {
    key: "xp",
    label: "Total XP",
    icon: Award,
  },
  {
    key: "progress",
    label: "Course Progress",
    icon: TrendingUp,
  },
] as const;

export function StatsCards({ stats }: { stats: Stats }) {
  return (
    <div className="grid gap-4 sm:grid-cols-3">
      {cards.map(({ key, label, icon: Icon }) => (
        <div
          key={key}
          className="rounded-xl bg-white p-6 shadow-sm flex items-center gap-4"
        >
          <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-sky-100 text-sky-600">
            <Icon className="h-6 w-6" />
          </div>
          <div>
            <p className="text-sm text-gray-500">{label}</p>
            <p className="text-xl font-semibold">
              {key === "progress"
                ? `${stats[key]}%`
                : stats[key as keyof Stats]}
            </p>
          </div>
        </div>
      ))}
      <div className="sm:col-span-3 rounded-xl bg-gradient-to-r from-purple-500 to-sky-500 p-6 text-white">
        <p className="mb-1 text-sm">Suggested Next Topic</p>
        <p className="text-lg font-medium">{stats.suggestion}</p>
      </div>
    </div>
  );
}
