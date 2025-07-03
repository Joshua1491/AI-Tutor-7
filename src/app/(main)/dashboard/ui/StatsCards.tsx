"use client";
import { Flame, Award, TrendingUp } from "lucide-react";
import type { Stats } from "../logic";
import type { ComponentType } from "react";

export function StatsCards({ stats }: { stats: Stats }) {
  return (
    <section className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
      {/* Day Streak */}
      <Card
        gradient="from-blue-500 via-purple-600 to-purple-500"
        icon={Flame}
        title="Streak"
        subtitle="Days"
        value={stats.streak}
      />
      {/* XP */}
      <Card
        gradient="from-pink-500 via-blue-600 to-purple-500"
        icon={Award}
        title="XP"
        subtitle="Total XP"
        value={stats.xp.toLocaleString()}
      />
      {/* Progress */}
      <Card
        gradient="from-pink-500 via-blue-600 to-purple-500"
        icon={TrendingUp}
        title="Overall Progress"
        subtitle="75 %"
        value={stats.progress}
      />
      {/* Suggested */}
      <div className="flex flex-col justify-center rounded-xl bg-gradient-to-br from-purple-500 via-blue-600 to-pink-600 p-6 shadow-lg text-white">
        <div className="mb-1 text-lg font-medium">Suggested for you</div>
        <div className="font-semibold">{stats.suggestion}</div>
      </div>
    </section>
  );
}

function Card({
  gradient,
  icon: Icon,
  title,
  subtitle,
  value,
}: {
  gradient: string;
  icon: ComponentType<{ className?: string }>;
  title: string;
  subtitle: string;
  value: string | number;
}) {
  return (
    <div
      className={`flex items-center gap-6 rounded-xl bg-gradient-to-r ${gradient} p-6 shadow-lg`}
    >
      <div className="relative">
        <svg className="h-16 w-16" viewBox="0 0 36 36" fill="none">
          <circle
            cx="18"
            cy="18"
            r="15"
            stroke="currentColor"
            strokeWidth="3"
            className="text-white/30"
          />
        </svg>
        <Icon className="absolute inset-0 m-auto h-6 w-6 text-white" />
      </div>
      <div>
        <div className="font-medium text-white">{title}</div>
        <div className="text-xs text-blue-200">{subtitle}</div>
        <div className="text-xl font-semibold text-white mt-1">{value}</div>
      </div>
    </div>
  );
}
