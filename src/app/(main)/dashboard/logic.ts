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
      { label: "Practice Quiz", icon: null, href: "/quiz" },
      { label: "Flash Cards", icon: null, href: "/flash" },
      { label: "New Lesson", icon: null, href: "/lesson" },
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
