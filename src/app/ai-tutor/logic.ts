/* ---------- Data types ---------- */
export type Topic = {
  id: string;
  name: string;
  gradient: string;
};

export type Subject = {
  id: string;
  name: string;
  topics: Topic[];
};

export type Exam = {
  id: string;
  name: string;
  subjects: Subject[];
};

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
          {
            id: "arithmetic",
            name: "Arithmetic",
            gradient: "from-purple-500 to-violet-600",
          },
          {
            id: "algebra",
            name: "Algebra",
            gradient: "from-cyan-500 to-blue-600",
          },
          {
            id: "geometry",
            name: "Geometry",
            gradient: "from-emerald-500 to-green-600",
          },
          {
            id: "number-sys",
            name: "Number Systems",
            gradient: "from-pink-500 to-fuchsia-600",
          },
        ],
      },
      {
        id: "lr",
        name: "Logical Reasoning",
        topics: [
          {
            id: "arrangements",
            name: "Seating Arrangements",
            gradient: "from-indigo-500 to-blue-500",
          },
          {
            id: "puzzles",
            name: "Puzzles",
            gradient: "from-amber-400 to-orange-500",
          },
          {
            id: "series",
            name: "Series Completion",
            gradient: "from-rose-500 to-rose-600",
          },
        ],
      },
      {
        id: "di",
        name: "Data Interpretation",
        topics: [
          {
            id: "tables",
            name: "Tables",
            gradient: "from-blue-400 to-blue-500",
          },
          {
            id: "bar",
            name: "Bar Charts",
            gradient: "from-teal-400 to-cyan-500",
          },
          {
            id: "pie",
            name: "Pie Charts",
            gradient: "from-sky-500 to-sky-600",
          },
        ],
      },
      {
        id: "va",
        name: "Verbal Ability",
        topics: [
          {
            id: "grammar",
            name: "Grammar",
            gradient: "from-emerald-400 to-green-500",
          },
          {
            id: "vocabulary",
            name: "Vocabulary",
            gradient: "from-amber-300 to-amber-400",
          },
        ],
      },
      {
        id: "rc",
        name: "Reading Comprehension",
        topics: [
          {
            id: "short-rc",
            name: "Short RC",
            gradient: "from-slate-600 to-slate-700",
          },
          {
            id: "long-rc",
            name: "Long RC",
            gradient: "from-pink-500 to-fuchsia-600",
          },
        ],
      },
    ],
  },
  {
    id: "jee-main",
    name: "JEE Main",
    subjects: [
      {
        id: "physics",
        name: "Physics",
        topics: [
          {
            id: "mechanics",
            name: "Mechanics",
            gradient: "from-blue-500 to-indigo-600",
          },
          {
            id: "thermodynamics",
            name: "Thermodynamics",
            gradient: "from-red-500 to-orange-600",
          },
          {
            id: "waves",
            name: "Waves",
            gradient: "from-green-500 to-teal-600",
          },
        ],
      },
      {
        id: "chemistry",
        name: "Chemistry",
        topics: [
          {
            id: "organic",
            name: "Organic Chemistry",
            gradient: "from-purple-500 to-pink-600",
          },
          {
            id: "inorganic",
            name: "Inorganic Chemistry",
            gradient: "from-yellow-500 to-orange-600",
          },
          {
            id: "physical",
            name: "Physical Chemistry",
            gradient: "from-cyan-500 to-blue-600",
          },
        ],
      },
      {
        id: "maths",
        name: "Mathematics",
        topics: [
          {
            id: "calculus",
            name: "Calculus",
            gradient: "from-emerald-500 to-green-600",
          },
          {
            id: "algebra",
            name: "Algebra",
            gradient: "from-violet-500 to-purple-600",
          },
          {
            id: "trigonometry",
            name: "Trigonometry",
            gradient: "from-rose-500 to-pink-600",
          },
        ],
      },
    ],
  },
];

/* ---------- Helper ---------- */
export async function getExam(examId: string): Promise<Exam | null> {
  try {
    const exam = exams.find((e) => e.id === examId);
    return exam || null;
  } catch (error) {
    console.error("Error fetching exam:", error);
    return null;
  }
}
