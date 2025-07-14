"use client";
import React, { useEffect, useState } from "react";
import { createPortal } from "react-dom";

// Matches the category objects used elsewhere (Exam Prep page)
export interface ExamCategory {
  id: string;
  name: string;
  gradient: string; // Tailwind gradient classes e.g. 'from-purple-500 to-pink-500'
}

interface ExamCategoryModalProps {
  open: boolean;
  categories: ExamCategory[];
  onSelect: (id: string) => void;
  onClose: () => void;
}

export default function ExamCategoryModal({
  open,
  categories,
  onSelect,
  onClose,
}: ExamCategoryModalProps) {
  // Prevent scrolling when modal open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  // Mount flag to avoid hydration mismatch
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  if (!mounted || !open) return null;

  return createPortal(
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4"
      role="dialog"
      aria-modal="true"
    >
      <div className="w-full max-w-xl rounded-lg bg-white p-8 shadow-lg dark:bg-slate-800">
        <header className="mb-4 flex items-center justify-between">
          <h2 className="text-lg font-semibold">Choose Exam Category</h2>
          <button
            onClick={onClose}
            aria-label="Close modal"
            className="rounded-md p-1 text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-700"
          >
            ✕
          </button>
        </header>

        <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-3">
          {categories.map((c) => (
            <button
              key={c.id}
              onClick={() => {
                onSelect(c.id);
              }}
              className={`flex h-24 items-center justify-center rounded-xl bg-gradient-to-br ${c.gradient} text-white text-sm font-medium shadow hover:opacity-90`}
            >
              {c.name}
            </button>
          ))}
        </div>
      </div>
    </div>,
    document.body,
  );
}
