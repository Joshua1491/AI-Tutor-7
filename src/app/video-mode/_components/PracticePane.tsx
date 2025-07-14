"use client";
import { useState } from "react";
import MCQCard from "./MCQCard";
import { Video, MCQ } from "../types";

export default function PracticePane({ videos }: { videos: Video[] }) {
  const mcqs = videos.flatMap((v) =>
    v.mcqs.map((m: MCQ) => ({ ...m, video: v })),
  );
  const [idx, setIdx] = useState(0);

  if (!mcqs.length) return null;

  return (
    <div className="flex flex-col gap-4">
      <MCQCard mcq={mcqs[idx]} />
      <div className="flex justify-end gap-2 pt-2">
        <button
          disabled={idx === 0}
          onClick={() => setIdx((i) => Math.max(i - 1, 0))}
          className="rounded-lg border px-3 py-1 text-sm disabled:opacity-40"
        >
          Prev
        </button>
        <button
          disabled={idx === mcqs.length - 1}
          onClick={() => setIdx((i) => Math.min(i + 1, mcqs.length - 1))}
          className="rounded-lg bg-primary px-3 py-1 text-sm text-white disabled:opacity-40"
        >
          Next
        </button>
      </div>
    </div>
  );
}
