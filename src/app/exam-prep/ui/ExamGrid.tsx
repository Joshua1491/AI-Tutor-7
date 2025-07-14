"use client";
import Link from "next/link";
import { Exam } from "../logic";

export function ExamGrid({ exams }: { exams: Exam[] }) {
  return (
    <section className="flex flex-wrap justify-center gap-6">
      {exams.map((ex) => (
        <Link key={ex.id} href={`/ai-tutor/${ex.id}`} className="block">
          <ExamCard exam={ex} />
        </Link>
      ))}
    </section>
  );
}

function ExamCard({ exam }: { exam: Exam }) {
  return (
    <div
      className={`w-40 h-32 rounded-xl shadow-md bg-gradient-to-br ${exam.gradient} flex items-center justify-center transition-transform hover:scale-[1.03] active:scale-95 min-h-[8rem] max-h-32 border border-white/10`}
    >
      <p className="px-3 py-2 text-center text-base font-semibold leading-tight line-clamp-2 break-words w-full text-white">
        {exam.name}
      </p>
    </div>
  );
}
