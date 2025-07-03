"use client";
import type { ComponentType } from "react";

interface Action {
  title: string;
  desc: string;
  icon?: ComponentType<{ className?: string }>;
}

export function QuickActions({ actions }: { actions: Action[] }) {
  return (
    <section className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {actions.map(({ title, desc, icon: Icon }, i) => (
        <div
          key={i}
          className="flex flex-col gap-2 rounded-xl border border-gray-200 bg-white p-6"
        >
          <div className="flex items-center gap-2 text-lg font-medium">
            {Icon && <Icon className="h-5 w-5" />} {title}
          </div>
          <p className="text-sm text-gray-500">{desc}</p>
        </div>
      ))}
    </section>
  );
}
