"use client";
import React from "react";
import { Menu, Search, Bell } from "lucide-react";

export function Topbar() {
  return (
    <header className="sticky top-0 z-20 flex items-center justify-between bg-white/80 px-4 py-4 lg:px-8 backdrop-blur border-b">
      <button className="lg:hidden">
        <Menu className="h-6 w-6 text-gray-700" />
      </button>
      <div className="relative ml-2 w-full max-w-xs">
        <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
        <input
          type="text"
          placeholder="Search…"
          className="w-full rounded-lg border border-gray-300 py-2 pl-10 pr-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <div className="flex items-center gap-3">
        <button className="rounded-full p-2 hover:bg-gray-100">
          <Bell className="h-5 w-5 text-gray-700" />
        </button>
        <img
          src="https://images.unsplash.com/photo-1511929825537-516974a253df?w=100&q=80"
          className="h-9 w-9 rounded-full object-cover"
          alt="avatar"
        />
      </div>
    </header>
  );
}
