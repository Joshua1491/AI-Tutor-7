import { Topic } from "../../logic";
import Image from "next/image";

export function TopicGrid({ topics }: { topics: Topic[] }) {
  // Safety check: if no topics, show empty state
  if (!topics || topics.length === 0) {
    return (
      <div className="mt-8 text-center text-gray-500">
        <p>No topics available for this subject.</p>
      </div>
    );
  }

  return (
    <div className="mt-8 grid gap-6 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
      {topics.map((t, idx) => (
        <button
          key={t.id}
          style={{ animationDelay: `${0.05 * idx + 0.3}s` }}
          className="relative overflow-hidden rounded-xl transform-gpu transition hover:scale-105 animate-[fadeSlide_0.5s_both] group"
        >
          <div
            className={`absolute inset-0 bg-gradient-to-br ${t.gradient} opacity-80 transition group-hover:opacity-90`}
          />
          <Image
            src="https://images.unsplash.com/photo-1621619856624-42fd193a0661?w=1080&q=80"
            alt=""
            width={1080}
            height={1080}
            className="absolute inset-0 h-full w-full object-cover mix-blend-overlay"
          />
          <div className="relative flex h-32 flex-col items-center justify-center p-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="mb-2 h-6 w-6 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M12 8V4H8"></path>
              <rect x="4" y="8" width="16" height="12" rx="2"></rect>
            </svg>
            <span className="text-center text-base font-semibold text-white leading-tight">
              {t.name}
            </span>
          </div>
        </button>
      ))}
    </div>
  );
}
