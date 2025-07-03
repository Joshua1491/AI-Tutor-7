"use client";
import Link from "next/link";
import { PlayCircle, FileText, BookOpen } from "lucide-react";

const iconMap = {
  "Practice Quiz": PlayCircle,
  "Flash Cards": FileText,
  "New Lesson": BookOpen,
} as const;

interface Action {
  label: string;
  href: string;
}

export function QuickActions({ actions }: { actions: readonly Action[] }) {
  return (
    <div className="grid gap-4 sm:grid-cols-3">
      {actions.map((action) => {
        const Icon =
          iconMap[action.label as keyof typeof iconMap] ?? PlayCircle;
        return (
          <Link
            key={action.label}
            href={action.href}
            className="flex flex-col items-center justify-center rounded-xl bg-white p-6 shadow-sm hover:bg-gray-50"
          >
            <Icon className="mb-2 h-8 w-8 text-sky-600" />
            <span className="text-sm font-medium text-gray-700">
              {action.label}
            </span>
          </Link>
        );
      })}
    </div>
  );
}
