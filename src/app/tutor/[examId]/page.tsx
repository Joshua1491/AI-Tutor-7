"use client";
import { useParams } from "next/navigation";

export default function TutorPage() {
  const params = useParams<{ examId: string }>();
  const examId = params.examId;
  return (
    <div className="flex h-screen items-center justify-center bg-gray-50">
      <h1 className="text-3xl font-bold">
        AI Tutor for{" "}
        <span className="text-blue-600">{examId.toUpperCase()}</span> coming
        soon!
      </h1>
    </div>
  );
}
