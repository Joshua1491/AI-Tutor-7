"use client";
import React from "react";
import { Search } from "lucide-react";

interface SearchBarProps {
  value: string;
  onChange: (v: string) => void;
}

export function SearchBar({ value, onChange }: SearchBarProps) {
  return (
    <div className="relative flex-1 min-w-[200px] max-w-sm">
      <Search className="pointer-events-none absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" />
      <input
        type="text"
        placeholder="Search"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full rounded-md border border-slate-200 bg-white py-2 pl-10 pr-3 text-sm focus:outline-none focus:ring-2 focus:ring-slate-400"
      />
    </div>
  );
}
