import { exams } from "../ai-tutor/logic";
import type { Video } from "./types";

// --- Mock video data -------------------------------------------------------
// Map by topic.id so it’s easy to fetch.
export const videosByTopic: Record<string, Video[]> = {
  arithmetic: [
    {
      id: "v-arith-1",
      youtube_id: "dQw4w9WgXcQ",
      title: "Basics of Percentages",
      duration_seconds: 420,
      difficulty: "beginner",
      mcqs: [
        {
          id: "mcq-1",
          question: "What is 10% of 250?",
          options: ["15", "20", "25", "30"],
          correct_index: 3,
          hint: "10% means divide by 10",
        },
      ],
    },
  ],
  algebra: [
    {
      id: "v-alg-1",
      youtube_id: "nT0Vv8WkU0Y",
      title: "Quadratic Equations in 10 minutes",
      duration_seconds: 600,
      difficulty: "intermediate",
      mcqs: [
        {
          id: "mcq-2",
          question: "The roots of x<sup>2</sup> − 5x + 6 = 0 are ___ and ___",
          options: ["2 & 3", "1 & 6", "−2 & −3", "3 & −2"],
          correct_index: 1,
          hint: "Product = 6, Sum = 5",
        },
      ],
    },
  ],
};

// --- Helper functions ------------------------------------------------------

export function getAllTopics(): { id: string; name: string }[] {
  const seen = new Set<string>();
  const unique: { id: string; name: string }[] = [];
  for (const ex of exams) {
    for (const sub of ex.subjects) {
      for (const t of sub.topics) {
        if (!seen.has(t.id)) {
          seen.add(t.id);
          unique.push({ id: t.id, name: t.name });
        }
      }
    }
  }
  return unique.sort((a, b) => a.name.localeCompare(b.name));
}

export function getVideos(topicId: string): Video[] {
  return videosByTopic[topicId] ?? [];
}
