import { Topic } from "../../logic";

export function TopicGrid({ topics }: { topics: Topic[] }) {
  return (
    <div className="mt-8 grid gap-6 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
      {topics.map((t, idx) => (
        <div
          key={t.id}
          style={{ animationDelay: `${0.05 * idx + 0.3}s` }}
          className="relative overflow-hidden rounded-xl transform-gpu transition hover:scale-105 animate-[fadeSlide_0.5s_both]"
        >
          <div
            className={`absolute inset-0 bg-gradient-to-br ${t.gradient} opacity-80 transition group-hover:opacity-90`}
          />
          <img
            src="https://images.unsplash.com/photo-1621619856624-42fd193a0661?w=1080&q=80"
            alt=""
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
        </div>
      ))}
    </div>
  );
} 