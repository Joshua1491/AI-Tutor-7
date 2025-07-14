/* eslint-disable jsx-a11y/label-has-associated-control, jsx-a11y/label-has-for */
"use client";
import { useState } from "react";
import clsx from "clsx";
import { MCQWithVideo } from "../types";

export default function MCQCard({ mcq }: { mcq: MCQWithVideo }) {
  const [selected, setSelected] = useState<number | null>(null);
  const [revealed, setRevealed] = useState(false);

  function submit() {
    if (selected === null) return;
    setRevealed(true);
  }

  return (
    <div className="space-y-4 rounded-2xl border bg-card p-6 shadow-sm">
      <p
        className="text-sm font-medium leading-snug"
        dangerouslySetInnerHTML={{ __html: mcq.question }}
      />

      <ol className="space-y-2">
        {mcq.options.map((opt: string, idx: number) => {
          const isCorrect = idx + 1 === mcq.correct_index;
          const chosen = selected === idx;
          return (
            <li key={idx}>
              <label
                htmlFor={`mcq-${mcq.id}-${idx}`}
                className={clsx(
                  "flex cursor-pointer items-start gap-2 rounded-lg border p-3 text-sm transition",
                  {
                    "border-primary/50 bg-primary/10 ring-2 ring-primary":
                      chosen && !revealed,
                    "border-green-600/60 bg-green-500/10":
                      revealed && isCorrect,
                    "border-red-600/60 bg-red-500/10":
                      revealed && chosen && !isCorrect,
                  },
                )}
              >
                <input
                  id={`mcq-${mcq.id}-${idx}`}
                  type="radio"
                  name={`mcq-${mcq.id}`}
                  value={idx}
                  disabled={revealed}
                  onChange={() => setSelected(idx)}
                  className="mt-1 h-4 w-4 shrink-0 cursor-pointer accent-primary"
                />
                <span dangerouslySetInnerHTML={{ __html: opt }} />
              </label>
            </li>
          );
        })}
      </ol>

      <div className="flex justify-between gap-4 pt-2">
        <button
          onClick={submit}
          disabled={selected === null || revealed}
          className="rounded-lg bg-primary px-4 py-2 text-sm font-medium text-white disabled:opacity-40"
        >
          {revealed ? "Submitted" : "Submit"}
        </button>
        {revealed && (
          <span className="text-sm text-muted-foreground">
            Hint: {mcq.hint}
          </span>
        )}
      </div>
    </div>
  );
}
