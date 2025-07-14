"use client";
import { useEffect } from "react";

export default function VideoModeError({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);
  return (
    <div className="flex flex-col items-center gap-6 py-24">
      <h2 className="text-xl font-semibold text-destructive">
        Something went wrong 😔
      </h2>
      <button
        onClick={() => reset()}
        className="rounded-md bg-primary px-4 py-2 text-white hover:bg-primary/90"
      >
        Retry
      </button>
    </div>
  );
}
