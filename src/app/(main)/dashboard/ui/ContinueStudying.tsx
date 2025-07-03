"use client";

interface Item {
  subject: string;
  topic: string;
}

export function ContinueStudying({ list }: { list: readonly Item[] }) {
  return (
    <div className="rounded-xl bg-white p-6 shadow-sm">
      <h2 className="mb-4 text-lg font-semibold">Continue Studying</h2>
      <ul className="space-y-3">
        {list.map((item) => (
          <li key={item.topic} className="flex items-center justify-between">
            <span>
              <span className="font-medium text-gray-800">
                {item.subject}:{" "}
              </span>
              <span className="text-gray-600">{item.topic}</span>
            </span>
            <button className="rounded-md bg-sky-600 px-3 py-1 text-sm text-white hover:bg-sky-700">
              Resume
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
