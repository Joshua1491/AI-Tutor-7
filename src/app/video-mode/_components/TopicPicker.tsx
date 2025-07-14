"use client";
import { useRouter, useSearchParams } from "next/navigation";

export function TopicPicker({
  topics,
}: {
  topics: { id: string; name: string }[];
}) {
  const router = useRouter();
  const params = useSearchParams();
  const current = params.get("topicId") ?? "";

  function onChange(e: React.ChangeEvent<HTMLSelectElement>) {
    const id = e.target.value;
    if (!id) return;
    router.push(`/video-mode?topicId=${id}`);
  }

  return (
    <select
      aria-label="Select topic"
      className="rounded-md border border-gray-300 bg-white px-3 py-2 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-primary"
      onChange={onChange}
      value={current}
    >
      <option value="" disabled>
        Select Topic…
      </option>
      {topics.map((t) => (
        <option key={t.id} value={t.id}>
          {t.name}
        </option>
      ))}
    </select>
  );
}
