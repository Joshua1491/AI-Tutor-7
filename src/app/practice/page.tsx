"use client";
import { Sidebar } from "../(main)/dashboard/ui/Sidebar";
import { Topbar } from "../(main)/dashboard/ui/Topbar";
import { useEffect, useState, useMemo } from "react";
import { getExamPrepData, Exam } from "../exam-prep/logic";
import Link from "next/link";

export default function PracticePage() {
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
    <div className="flex h-screen overflow-hidden bg-gray-50 text-slate-900">
      <Sidebar active="/practice" />
      <div className="flex flex-1 flex-col lg:pl-64">
        <Topbar />
        <main className="flex-1 overflow-y-auto p-6 space-y-8">
          <h1 className="text-3xl font-bold tracking-tight mb-2">Practice</h1>
          <p className="text-lg text-gray-600 mb-6">
            Select an exam to start practicing questions.
          </p>
          <div className="mb-6">
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search exams..."
              className="w-full max-w-md rounded-lg border border-gray-300 py-2 px-4 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="px-1 sm:px-0">
            <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 min-h-[300px]">
              {filteredExams.map((exam) => (
                <Link
                  key={exam.id}
                  href={`/practice/${exam.id}`}
                  className="block"
                >
                  <div
                    className={`rounded-xl bg-gradient-to-br ${exam.gradient.replace("text-white", "")} p-6 shadow-lg flex flex-col items-center justify-center transition-transform hover:scale-105 min-h-[120px]`}
                  >
                    <span className="text-xl font-semibold text-white mb-2 text-center">
                      {exam.name}
                    </span>
                    <span className="text-sm text-white/80 text-center">
                      {exam.category}
                    </span>
                  </div>
                </Link>
              ))}
            </div>
            {filteredExams.length === 0 && (
              <div className="text-center text-gray-500 mt-8">
                No exams found.
              </div>
            )}
          </div>
        </main>
      </div>
    </div>
  );
}
