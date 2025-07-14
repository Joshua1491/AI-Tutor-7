"use client";
import React from "react";

interface FiltersProps {
  categories: string[];
  active: string;
  onSelect: (cat: string) => void;
}

export function Filters({ categories, active, onSelect }: FiltersProps) {
  return (
    <>
      {categories.map((cat) => {
        const isActive = cat === active;
        return (
          <button
            key={cat}
            onClick={() => onSelect(cat)}
            className={`rounded-full border px-4 py-1 text-sm font-medium transition-colors ${
              isActive
                ? "border-blue-600 bg-blue-600 text-white"
                : "border-slate-200 bg-white hover:bg-slate-100"
            }`}
          >
            {cat}
          </button>
        );
      })}
    </>
  );
}
