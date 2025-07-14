"use client";
import React, { useEffect, useState, useMemo } from "react";
import { Sidebar } from "../(main)/dashboard/ui/Sidebar";
import { Topbar } from "../(main)/dashboard/ui/Topbar";
import { SearchBar } from "./ui/SearchBar";
import { Filters } from "./ui/Filters";
import { ExamGrid } from "./ui/ExamGrid";
import { getExamPrepData } from "./logic";
import type { Exam } from "./logic";

export default function ExamPrepPage() {
  const [data, setData] = useState<{ categories: string[]; exams: Exam[] }>({
    categories: [],
    exams: [],
  });
  const [category, setCategory] = useState<string>("All");
  const [query, setQuery] = useState<string>("");

  useEffect(() => {
    (async () => {
      const d = await getExamPrepData();
      setData(d);
    })();
  }, []);

  const filteredExams = useMemo(() => {
    let exams = data.exams;
    if (category !== "All") {
      exams = exams.filter((e) => e.category === category);
    }
    if (query.trim()) {
      const q = query.toLowerCase();
      exams = exams.filter((e) => e.name.toLowerCase().includes(q));
    }
    return exams;
  }, [data.exams, category, query]);

  return (
    <div className="flex h-screen overflow-hidden bg-gray-50 text-slate-900">
      <Sidebar active="/exam-prep" />
      <div className="flex flex-1 flex-col lg:pl-64">
        <Topbar />
        <main className="flex-1 overflow-y-auto p-6 space-y-8 max-w-7xl mx-auto">
          <section className="space-y-3">
            <h1 className="text-3xl font-bold tracking-tight">
              Choose Your Examination!!
            </h1>
            <h2 className="text-xl font-semibold">
              Select the exam you want to crack
            </h2>
            <div className="flex flex-wrap items-center gap-2">
              <SearchBar value={query} onChange={setQuery} />
              <Filters
                categories={data.categories}
                active={category}
                onSelect={setCategory}
              />
            </div>
          </section>

          <ExamGrid exams={filteredExams} />
        </main>
      </div>
    </div>
  );
}
