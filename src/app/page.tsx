"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    // Redirect to dashboard on load
    router.push("/dashboard");
  }, [router]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50">
      <div className="text-center">
        <div className="mb-4 text-2xl font-bold text-gray-900">AI Tutor 7</div>
        <div className="text-gray-600">Redirecting to dashboard...</div>
      </div>
    </div>
  );
}
