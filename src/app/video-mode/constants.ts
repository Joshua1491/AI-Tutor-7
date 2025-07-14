export interface ExamOption {
  id: string;
  name: string;
  gradient: string;
}

export const EXAMS: Record<string, ExamOption[]> = {
  engineering: [
    {
      id: "jee-main",
      name: "JEE Main",
      gradient: "from-purple-500 to-indigo-500",
    },
    {
      id: "jee-advanced",
      name: "JEE Advanced",
      gradient: "from-indigo-500 to-purple-500",
    },
    { id: "bitsat", name: "BITSAT", gradient: "from-cyan-500 to-blue-500" },
    { id: "viteee", name: "VITEEE", gradient: "from-blue-500 to-sky-500" },
    { id: "srmeee", name: "SRMJEEE", gradient: "from-pink-500 to-fuchsia-500" },
    {
      id: "comedk",
      name: "COMEDK UGET",
      gradient: "from-green-500 to-emerald-500",
    },
  ],
  medical: [
    { id: "neet-ug", name: "NEET-UG", gradient: "from-pink-500 to-rose-500" },
    {
      id: "aiims",
      name: "AIIMS MBBS (INI-CET UG)",
      gradient: "from-purple-500 to-pink-500",
    },
    {
      id: "jipmer",
      name: "JIPMER MBBS",
      gradient: "from-cyan-500 to-teal-500",
    },
    { id: "afmc", name: "AFMC MBBS", gradient: "from-rose-500 to-red-500" },
    {
      id: "cmc",
      name: "CMC Vellore MBBS",
      gradient: "from-violet-500 to-purple-500",
    },
    { id: "bhu", name: "BHU MBBS", gradient: "from-green-500 to-emerald-600" },
  ],
  mba: [
    { id: "cat", name: "CAT", gradient: "from-amber-500 to-orange-500" },
    { id: "xat", name: "XAT", gradient: "from-yellow-500 to-amber-500" },
    { id: "mat", name: "MAT", gradient: "from-teal-500 to-green-500" },
    { id: "snap", name: "SNAP", gradient: "from-fuchsia-500 to-pink-600" },
  ],
} as const;
