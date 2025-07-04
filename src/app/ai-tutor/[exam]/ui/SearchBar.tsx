"use client";
import { Search } from "lucide-react";

export function SearchBar() {
  return (
    <div className="relative text-gray-600">
      <Search className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
      <input
        type="text"
        placeholder="Search tutors"
        className="w-full rounded-lg border border-gray-200 bg-white py-2 pl-10 pr-4 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
      />
    </div>
  );
} 