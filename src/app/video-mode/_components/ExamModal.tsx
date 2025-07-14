"use client";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

export interface ExamOption {
  id: string;
  name: string;
  gradient: string; // Tailwind gradient classes
}

interface ExamModalProps {
  open: boolean;
  options: ExamOption[];
  onSelect: (id: string) => void;
  onBack: () => void;
}

export default function ExamModal({
  open,
  options,
  onSelect,
  onBack,
}: ExamModalProps) {
  // lock scroll when open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  if (!mounted || !open) return null;

  return createPortal(
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4"
      role="dialog"
      aria-modal="true"
    >
      <div className="w-full max-w-lg rounded-lg bg-white p-8 shadow-lg dark:bg-slate-800">
        {/* Header */}
        <header className="mb-4 flex items-center gap-2">
          <button
            onClick={onBack}
            aria-label="Go back"
            className="rounded-md p-1 text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-700"
          >
            ←
          </button>
          <h2 className="text-lg font-semibold">Select Examination</h2>
        </header>

        {/* Options list */}
        <ul className="grid gap-3 sm:grid-cols-2 max-h-[70vh] overflow-y-auto pr-1">
          {options.map((opt) => (
            <li key={opt.id} className="flex">
              <button
                onClick={() => onSelect(opt.id)}
                className={`flex flex-1 items-center justify-center rounded-lg bg-gradient-to-br ${opt.gradient} px-4 py-3 text-sm font-medium text-white shadow hover:opacity-90 text-center`}
              >
                {opt.name}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>,
    document.body,
  );
}
