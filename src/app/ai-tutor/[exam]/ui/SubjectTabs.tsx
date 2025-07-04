"use client";
import { useState } from "react";
import { Subject } from "../../logic";

type Props = {
  subjects: Subject[];
  defaultId: string;
  children: (active: Subject) => React.ReactNode;
};

export function SubjectTabs({ subjects, defaultId, children }: Props) {
  const [active, setActive] = useState(defaultId);
  const activeSub = subjects.find((s) => s.id === active)!;

  return (
    <>
      <div className="flex flex-wrap gap-2">
        {subjects.map((s) => (
          <button
            key={s.id}
            onClick={() => setActive(s.id)}
            className={`rounded-full border border-gray-200 px-4 py-1.5 text-sm font-medium ${
              s.id === active
                ? "bg-indigo-600 text-white"
                : "bg-gray-100 hover:bg-gray-200"
            }`}
          >
            {s.name}
          </button>
        ))}
      </div>
      {children(activeSub)}
    </>
  );
} 