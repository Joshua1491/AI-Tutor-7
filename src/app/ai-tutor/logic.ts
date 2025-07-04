import { z } from "zod";

/* ---------- Data schema ---------- */
export const TopicSchema = z.object({
  id: z.string(),
  name: z.string(),
  gradient: z.string(),
});
export const SubjectSchema = z.object({
  id: z.string(),
  name: z.string(),
  topics: z.array(TopicSchema),
});
export const ExamSchema = z.object({
  id: z.string(),
  name: z.string(),
  subjects: z.array(SubjectSchema),
});
export type Exam = z.infer<typeof ExamSchema>;
export type Subject = z.infer<typeof SubjectSchema>;
export type Topic = z.infer<typeof TopicSchema>;

/* ---------- Mock catalog ---------- */
export const exams: Exam[] = [
  {
    id: "cat",
    name: "CAT",
    subjects: [
      {
        id: "qa",
        name: "Quantitative Aptitude",
        topics: [
          { id: "arithmetic", name: "Arithmetic", gradient: "from-purple-500 to-violet-600" },
          { id: "algebra", name: "Algebra", gradient: "from-cyan-500 to-blue-600" },
          { id: "geometry", name: "Geometry", gradient: "from-emerald-500 to-green-600" },
          { id: "number-sys", name: "Number Systems", gradient: "from-pink-500 to-fuchsia-600" },
        ],
      },
      {
        id: "lr",
        name: "Logical Reasoning",
        topics: [
          { id: "arrangements", name: "Seating Arrangements", gradient: "from-indigo-500 to-blue-500" },
          { id: "puzzles", name: "Puzzles", gradient: "from-amber-400 to-orange-500" },
          { id: "series", name: "Series Completion", gradient: "from-rose-500 to-rose-600" },
        ],
      },
      {
        id: "di",
        name: "Data Interpretation",
        topics: [
          { id: "tables", name: "Tables", gradient: "from-blue-400 to-blue-500" },
          { id: "bar", name: "Bar Charts", gradient: "from-teal-400 to-cyan-500" },
          { id: "pie", name: "Pie Charts", gradient: "from-sky-500 to-sky-600" },
        ],
      },
      {
        id: "va",
        name: "Verbal Ability",
        topics: [
          { id: "grammar", name: "Grammar", gradient: "from-emerald-400 to-green-500" },
          { id: "vocabulary", name: "Vocabulary", gradient: "from-amber-300 to-amber-400" },
        ],
      },
      {
        id: "rc",
        name: "Reading Comprehension",
        topics: [
          { id: "short-rc", name: "Short RC", gradient: "from-slate-600 to-slate-700" },
          { id: "long-rc", name: "Long RC", gradient: "from-pink-500 to-fuchsia-600" },
        ],
      },
    ],
  },
  /* --- add JEE, GMAT, etc. here in exactly the same structure --- */
];

/* ---------- Helper ---------- */
export async function getExam(examId: string): Promise<Exam | null> {
  return exams.find((e) => e.id === examId) || null;
} 