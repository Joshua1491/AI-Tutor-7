"use client";
import { Bell } from "lucide-react";

export function Topbar() {
  return (
    <header className="sticky top-0 z-30 flex h-16 items-center justify-between bg-white shadow-sm px-4 lg:px-8">
      <h1 className="text-lg font-semibold">Welcome back 👋</h1>
      <button
        className="relative p-2 rounded-full hover:bg-gray-100"
        aria-label="Notifications"
      >
        <Bell className="h-5 w-5" />
        <span className="absolute -top-0.5 -right-0.5 h-2 w-2 rounded-full bg-red-500" />
      </button>
    </header>
  );
}
