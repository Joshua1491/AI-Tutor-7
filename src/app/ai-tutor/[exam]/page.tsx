"use client";
import { Sidebar } from "../../(main)/dashboard/ui/Sidebar";
import { Topbar } from "../../(main)/dashboard/ui/Topbar";
import { getExam, Subject } from "../logic";
import { notFound } from "next/navigation";
import { SearchBar } from "./ui/SearchBar";
import { SubjectTabs } from "./ui/SubjectTabs";
import { TopicGrid } from "./ui/TopicGrid";

type Props = { params: Promise<{ exam: string }> };

export default async function AiTutorPage({ params }: Props) {
  const { exam: examId } = await params;
  const exam = await getExam(examId);
  if (!exam) notFound();

  // Ensure at least one subject exists
  if (exam.subjects.length === 0) {
    notFound();
  }
  const firstSubjectId = exam.subjects[0]!.id;

  return (
    <div className="flex h-screen overflow-hidden bg-gray-50 text-slate-900">
      <Sidebar active={`/ai-tutor/${exam.id}`} />
      <div className="flex flex-1 flex-col lg:pl-64">
        <Topbar />
        <main className="flex-1 overflow-y-auto space-y-6 p-6 max-w-7xl mx-auto">
          <h1 className="text-3xl font-semibold tracking-tight">{exam.name} – AI Tutor</h1>
          <p className="text-lg text-gray-600">Pick a topic and start learning instantly</p>

          <div className="max-w-md">
            <SearchBar />
          </div>

          {/* Subject tabs */}
          <SubjectTabs subjects={exam.subjects} defaultId={firstSubjectId}>
            {(activeSub: Subject) => <TopicGrid topics={activeSub.topics} />}
          </SubjectTabs>
        </main>
      </div>
    </div>
  );
} 