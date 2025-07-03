/* eslint-disable @typescript-eslint/no-unused-vars */
import { z } from "zod";

const StatsSchema = z.object({
  streak: z.number(),
  xp: z.number(),
  progress: z.number(),
  suggestion: z.string(),
});
export type Stats = z.infer<typeof StatsSchema>;

export interface QuickAction {
  label: string;
  icon: React.ReactNode;
  href: string;
}

export async function getDashboardData() {
  // TODO: replace with MCP pull (`profile:getProgress`, etc.)
  return {
    stats: {
      streak: 5,
      xp: 1200,
      progress: 75,
      suggestion: "Trigonometric Functions",
    },
    actions: [
      { title: "Practice Quiz", desc: "Mathematics", icon: null },
      { title: "Ask AI Tutor", desc: "Type your question…", icon: null },
      { title: "Watch next video", desc: "Introduction to Limits", icon: null },
      { title: "Mock Examinations", desc: "", icon: null },
      { title: "Upload textbook", desc: "Curriculum Textbook.pdf", icon: null },
      { title: "Need help? Chat with a Human Tutor", desc: "", icon: null },
    ],
    weekly: {
      labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
      values: [2, 4, 3, 5, 4, 1, 2],
    },
    continueStudying: [
      { subject: "Calculus", topic: "Limits" },
      { subject: "Algebra", topic: "Quadratic Equations" },
    ],
  } as const;
}
