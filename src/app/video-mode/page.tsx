"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Sidebar } from "../(main)/dashboard/ui/Sidebar";
import { Topbar } from "../(main)/dashboard/ui/Topbar";
import ExamCategoryModal, {
  ExamCategory,
} from "./_components/ExamCategoryModal";
import ExamModal from "./_components/ExamModal";
import { getExamPrepData } from "../exam-prep/logic";
import VideoBank from "./_components/VideoBank";
import PracticePane from "./_components/PracticePane";
import { videosByTopic } from "./logic";

type Step = "category" | "exam" | "topic";

// Reuse ExamModal option shape
type ExamOption = {
  id: string;
  name: string;
  gradient: string;
};

export default function VideoModePage({
  searchParams,
}: {
  searchParams: { examId?: string };
}) {
  const router = useRouter();

  // Unwrap searchParams object first as recommended by Next.js
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const params = React.use(searchParams as any) as { examId?: string };
  const examId = params.examId;

  const [step, setStep] = useState<Step>(examId ? "topic" : "category");
  const [categoryId, setCategoryId] = useState<string | null>(null);

  // All exam options fetched from the exam-prep section
  const [examOptionsByCat, setExamOptionsByCat] = useState<
    Record<string, ExamOption[]>
  >({});

  // Fetch the exam-prep data once on mount and group by category (slug-cased)
  useEffect(() => {
    (async () => {
      const { exams } = await getExamPrepData();

      const grouped: Record<string, ExamOption[]> = {};

      exams.forEach((ex) => {
        // slugify the category so we can use it as id keys (e.g. "Engineering" -> "engineering")
        const key = ex.category.toLowerCase().replace(/\s+/g, "-");
        if (!grouped[key]) grouped[key] = [];
        // Remove any text-color utilities from the gradient string so text remains readable in button
        const gradient = ex.gradient.replace(/text-[^ ]+/g, "").trim();
        grouped[key].push({ id: ex.id, name: ex.name, gradient });
      });

      setExamOptionsByCat(grouped);
    })();
  }, []);

  // derive categories (static for now – could also come from exam-prep data)
  const categories: ExamCategory[] = [
    {
      id: "engineering",
      name: "Engineering",
      gradient: "from-blue-500 to-indigo-500",
    },
    { id: "medical", name: "Medical", gradient: "from-pink-500 to-rose-500" },
    { id: "mba", name: "MBA", gradient: "from-emerald-500 to-teal-500" },
    { id: "law", name: "Law", gradient: "from-purple-500 to-violet-500" },
    {
      id: "govt.-jobs",
      name: "Govt. Jobs",
      gradient: "from-orange-500 to-amber-500",
    },
    {
      id: "study-abroad",
      name: "Study Abroad",
      gradient: "from-sky-500 to-blue-600",
    },
  ];

  const currentExamOptions = categoryId
    ? (examOptionsByCat[categoryId] ?? [])
    : [];

  return (
    <div className="flex h-screen overflow-hidden bg-gray-50 text-slate-900">
      <Sidebar active="/video-mode" />
      <div className="flex flex-1 flex-col lg:pl-64">
        <Topbar />

        <main className="flex-1 overflow-y-auto p-6 space-y-6 max-w-7xl mx-auto">
          {step === "topic" && (
            <div className="space-y-6">
              <h1 className="text-3xl font-bold tracking-tight">
                Watch curated videos & test yourself
              </h1>

              <div className="grid gap-8 lg:grid-cols-[1fr_320px]">
                {/* Videos */}
                <VideoBank videos={Object.values(videosByTopic).flat()} />

                {/* Practice questions */}
                <PracticePane videos={Object.values(videosByTopic).flat()} />
              </div>
            </div>
          )}
        </main>
      </div>

      {/* Modals */}
      <ExamCategoryModal
        open={step === "category"}
        categories={categories}
        onSelect={(id) => {
          setCategoryId(id);
          setStep("exam");
        }}
        onClose={() => setStep("topic")}
      />

      <ExamModal
        open={step === "exam"}
        options={currentExamOptions}
        onSelect={(examId) => {
          router.push(`/video-mode?examId=${examId}`);
          setStep("topic");
        }}
        onBack={() => setStep("category")}
      />
    </div>
  );
}
