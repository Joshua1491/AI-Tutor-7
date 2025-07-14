import clsx from "clsx";
export default function DifficultyChip({
  level,
}: {
  level: "beginner" | "intermediate" | "advanced";
}) {
  const map = {
    beginner: "bg-green-600/20 text-green-700 dark:text-green-300",
    intermediate: "bg-yellow-600/20 text-yellow-700 dark:text-yellow-300",
    advanced: "bg-red-600/20 text-red-700 dark:text-red-300",
  } as const;
  return (
    <span
      className={clsx(
        "rounded-full px-2 py-0.5 text-[10px] font-semibold uppercase",
        map[level],
      )}
    >
      {level}
    </span>
  );
}
