"use client";

export function ContinueStudying({
  list,
}: {
  list: { subject: string; topic: string }[];
}) {
  return (
    <div className="flex h-80 flex-col rounded-xl bg-gradient-to-br from-blue-500 via-purple-600 to-pink-500 p-6 text-white shadow-lg">
      <h2 className="mb-4 text-lg font-semibold tracking-tight">
        Continue studying
      </h2>
      <div className="space-y-4">
        {list.map((item) => (
          <div
            key={item.topic}
            className="flex cursor-pointer items-center justify-between rounded-lg border border-white/30 p-4 transition hover:bg-white/20"
          >
            <div>
              <div className="font-medium">{item.subject}</div>
              <p className="text-sm text-white/80">{item.topic}</p>
            </div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-white/70"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <polygon points="6 3 20 12 6 21 6 3"></polygon>
            </svg>
          </div>
        ))}
      </div>
    </div>
  );
}
