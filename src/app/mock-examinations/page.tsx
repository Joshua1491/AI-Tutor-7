"use client";
import { Sidebar } from "../(main)/dashboard/ui/Sidebar";
import { Topbar } from "../(main)/dashboard/ui/Topbar";
import { useEffect, useState, useMemo } from "react";
import { getExamPrepData, Exam } from "../exam-prep/logic";

export default function MockExaminationsPage() {
  const [exams, setExams] = useState<Exam[]>([]);
  const [query, setQuery] = useState("");

  useEffect(() => {
    (async () => {
      const data = await getExamPrepData();
      setExams(data.exams);
    })();
  }, []);

  const filteredExams = useMemo(() => {
    if (!query.trim()) return exams;
    const q = query.toLowerCase();
    return exams.filter((exam) => exam.name.toLowerCase().includes(q));
  }, [exams, query]);

  return (
    <div className="flex bg-neutral-50 text-neutral-900">
      <Sidebar active="/mock-examinations" />
      <div className="flex flex-1 flex-col lg:pl-64">
        <Topbar />
        {/* Page Header */}
        <section className="py-10 px-4 lg:px-8 border-b border-neutral-200 bg-white">
          <div className="max-w-5xl mx-auto flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div>
              <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">
                Mock Examinations
              </h2>
              <p className="text-sm text-neutral-600 mt-2">
                Prepare with curated mock tests and track your performance.
              </p>
            </div>
            <label className="relative w-full md:w-72">
              <svg
                className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-neutral-500"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <circle cx="11" cy="11" r="8" />
                <path d="M21 21l-4.35-4.35" />
              </svg>
              <input
                type="search"
                placeholder="Search exams…"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="w-full rounded-lg border border-neutral-200 pl-10 pr-3 py-2 text-sm placeholder-neutral-400 outline-none focus:ring-2 focus:ring-indigo-600 focus:border-indigo-600 transition"
              />
            </label>
          </div>
        </section>
        {/* Content */}
        <main className="flex-1 px-4 lg:px-8 py-10">
          <div className="max-w-5xl mx-auto space-y-12">
            {/* Exams Grid */}
            <section>
              <h3 className="text-lg md:text-xl font-semibold tracking-tight mb-6">
                Your Exams
              </h3>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredExams.map((exam) => (
                  <article
                    key={exam.id}
                    className="group bg-white border border-neutral-200 rounded-xl shadow-sm p-6 flex flex-col gap-4 hover:shadow-md hover:-translate-y-0.5 transition"
                  >
                    <header className="flex items-center justify-between">
                      <span className="text-sm font-medium text-neutral-600 flex items-center gap-2">
                        {/* Icon placeholder */}
                        <svg
                          className="w-4 h-4"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          viewBox="0 0 24 24"
                        >
                          <rect x="4" y="4" width="16" height="16" rx="2" />
                        </svg>
                        {exam.category}
                      </span>
                      <span className="text-xs rounded-full bg-indigo-50 text-indigo-700 px-2 py-0.5">
                        Not Started
                      </span>
                    </header>
                    <h4 className="text-base font-semibold tracking-tight">
                      {exam.name} Mock Test
                    </h4>
                    <p className="text-sm text-neutral-600 flex items-center gap-2">
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                      >
                        <circle cx="12" cy="12" r="10" />
                        <path d="M12 6v6l4 2" />
                      </svg>
                      60 mins • 100 Qs
                    </p>
                    <div className="flex-1"></div>
                    <button className="flex items-center justify-center gap-2 text-sm font-medium rounded-lg border border-neutral-200 bg-white hover:bg-neutral-50 py-2 transition">
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                      >
                        <polygon points="5 3 19 12 5 21 5 3" />
                      </svg>
                      Start
                    </button>
                  </article>
                ))}
                {filteredExams.length === 0 && (
                  <div className="col-span-full text-center text-gray-500">
                    No exams found.
                  </div>
                )}
              </div>
            </section>
            {/* Performance Analytics Placeholder */}
            <section>
              <h3 className="text-lg md:text-xl font-semibold tracking-tight mb-6">
                Performance Overview
              </h3>
              <div className="bg-white border border-neutral-200 rounded-xl shadow-sm p-6 flex items-center justify-center min-h-[200px] text-neutral-400">
                <span>Performance chart coming soon…</span>
              </div>
            </section>
          </div>
        </main>
      </div>
    </div>
  );
}
