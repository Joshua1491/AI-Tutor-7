"use client";
import { useState, useRef, useEffect } from "react";
import { Subject } from "../../logic";
import { TopicGrid } from "./TopicGrid";

type Props = {
  subjects: Subject[];
  defaultId: string;
};

export function SubjectTabs({ subjects, defaultId }: Props) {
  // Ensure defaultId exists in subjects, otherwise use first subject
  const validDefaultId =
    subjects?.find((s) => s.id === defaultId)?.id || subjects?.[0]?.id || "";

  const [active, setActive] = useState(validDefaultId);
  const tabRefs = useRef<Record<string, HTMLButtonElement | null>>({});

  useEffect(() => {
    if (tabRefs.current[active]) {
      tabRefs.current[active]?.scrollIntoView({
        behavior: "smooth",
        inline: "center",
        block: "nearest",
      });
    }
  }, [active]);

  // Safety check: if no subjects, return early
  if (!subjects || subjects.length === 0) {
    return <div>No subjects available</div>;
  }

  const activeSub = subjects.find((s) => s.id === active);

  // Safety check: if no active subject, return early
  if (!activeSub) {
    return <div>Subject not found</div>;
  }

  return (
    <>
      <div className="flex gap-2 justify-center items-center overflow-x-auto whitespace-nowrap py-2">
        {subjects.map((s) => (
          <button
            key={s.id}
            ref={(el) => {
              tabRefs.current[s.id] = el;
            }}
            onClick={() => setActive(s.id)}
            className={`rounded-full border border-gray-200 px-4 py-1.5 text-sm font-medium whitespace-nowrap w-[14rem] flex-none text-center ${
              s.id === active
                ? "bg-indigo-600 text-white"
                : "bg-gray-100 hover:bg-gray-200"
            }`}
          >
            {s.name}
          </button>
        ))}
      </div>
      <TopicGrid topics={activeSub.topics || []} />
    </>
  );
}
