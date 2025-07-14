export type Exam = {
  id: string;
  name: string;
  category: string;
  gradient: string; // Tailwind gradient classes
  popularity: number; // 1-100 higher = more popular
};

export async function getExamPrepData(): Promise<{
  categories: string[];
  exams: Exam[];
}> {
  const categories = [
    "All",
    "Engineering",
    "Medical",
    "MBA",
    "Law",
    "Govt. Jobs",
    "Study Abroad",
  ];

  const exams: Exam[] = [
    // Engineering (popularity descending)
    {
      id: "jee-main",
      name: "JEE Main",
      category: "Engineering",
      gradient: "from-violet-500 to-purple-600 text-white",
      popularity: 100,
    },
    {
      id: "jee-adv",
      name: "JEE Advanced",
      category: "Engineering",
      gradient: "from-violet-400 to-purple-500 text-white",
      popularity: 98,
    },
    {
      id: "bitsat",
      name: "BITSAT",
      category: "Engineering",
      gradient: "from-cyan-400 to-blue-500 text-white",
      popularity: 90,
    },
    {
      id: "viteee",
      name: "VITEEE",
      category: "Engineering",
      gradient: "from-indigo-500 to-blue-700 text-white",
      popularity: 85,
    },
    {
      id: "srmjee",
      name: "SRMJEEE",
      category: "Engineering",
      gradient: "from-pink-500 to-fuchsia-600 text-white",
      popularity: 80,
    },
    {
      id: "comedk",
      name: "COMEDK UGET",
      category: "Engineering",
      gradient: "from-emerald-400 to-green-500 text-white",
      popularity: 75,
    },
    {
      id: "wbjee",
      name: "WBJEE",
      category: "Engineering",
      gradient: "from-amber-300 to-amber-400 text-white",
      popularity: 70,
    },
    {
      id: "mht-cet-pcm",
      name: "MHT CET (PCM)",
      category: "Engineering",
      gradient: "from-blue-500 to-sky-600 text-white",
      popularity: 68,
    },
    {
      id: "ap-eamcet",
      name: "AP EAMCET",
      category: "Engineering",
      gradient: "from-teal-400 to-cyan-500 text-white",
      popularity: 65,
    },
    {
      id: "kiitee-met",
      name: "KIITEE / MET",
      category: "Engineering",
      gradient: "from-yellow-300 to-yellow-400 text-white",
      popularity: 60,
    },

    // Medical
    {
      id: "neet",
      name: "NEET-UG",
      category: "Medical",
      gradient: "from-rose-500 to-pink-600 text-white",
      popularity: 100,
    },
    {
      id: "aiims",
      name: "AIIMS MBBS (INI-CET UG)",
      category: "Medical",
      gradient: "from-purple-500 to-violet-600 text-white",
      popularity: 90,
    },
    {
      id: "jipmer",
      name: "JIPMER MBBS",
      category: "Medical",
      gradient: "from-cyan-500 to-sky-600 text-white",
      popularity: 85,
    },
    {
      id: "afmc",
      name: "AFMC MBBS",
      category: "Medical",
      gradient: "from-fuchsia-500 to-pink-600 text-white",
      popularity: 80,
    },
    {
      id: "cmc",
      name: "CMC Vellore MBBS",
      category: "Medical",
      gradient: "from-indigo-400 to-blue-500 text-white",
      popularity: 75,
    },
    {
      id: "bhu",
      name: "BHU MBBS",
      category: "Medical",
      gradient: "from-emerald-400 to-green-500 text-white",
      popularity: 70,
    },
    {
      id: "amu",
      name: "AMU MBBS",
      category: "Medical",
      gradient: "from-amber-400 to-yellow-500 text-white",
      popularity: 65,
    },
    {
      id: "manipal-med",
      name: "Manipal MBBS (MET-Med)",
      category: "Medical",
      gradient: "from-sky-400 to-blue-500 text-white",
      popularity: 60,
    },
    {
      id: "kcet-med",
      name: "KCET Medical",
      category: "Medical",
      gradient: "from-green-400 to-teal-500 text-white",
      popularity: 58,
    },
    {
      id: "mht-cet-med",
      name: "MHT CET Medical",
      category: "Medical",
      gradient: "from-slate-600 to-slate-700 text-white",
      popularity: 55,
    },

    // MBA
    {
      id: "cat",
      name: "CAT",
      category: "MBA",
      gradient: "from-yellow-300 to-yellow-400 text-white",
      popularity: 100,
    },
    {
      id: "xat",
      name: "XAT",
      category: "MBA",
      gradient: "from-cyan-400 to-blue-500 text-white",
      popularity: 92,
    },
    {
      id: "cmat",
      name: "CMAT",
      category: "MBA",
      gradient: "from-sky-500 to-sky-600 text-white",
      popularity: 88,
    },
    {
      id: "mat",
      name: "MAT",
      category: "MBA",
      gradient: "from-violet-500 to-indigo-600 text-white",
      popularity: 80,
    },
    {
      id: "nmat",
      name: "NMAT",
      category: "MBA",
      gradient: "from-pink-500 to-fuchsia-600 text-white",
      popularity: 78,
    },
    {
      id: "snap",
      name: "SNAP",
      category: "MBA",
      gradient: "from-indigo-500 to-blue-700 text-white",
      popularity: 76,
    },
    {
      id: "iift",
      name: "IIFT MBA (IB)",
      category: "MBA",
      gradient: "from-rose-500 to-pink-600 text-white",
      popularity: 74,
    },
    {
      id: "gmat",
      name: "GMAT",
      category: "MBA",
      gradient: "from-blue-400 to-blue-600 text-white",
      popularity: 90,
    },
    {
      id: "atma",
      name: "ATMA",
      category: "MBA",
      gradient: "from-green-500 to-emerald-600 text-white",
      popularity: 60,
    },
    {
      id: "tiss",
      name: "TISS-NET",
      category: "MBA",
      gradient: "from-amber-400 to-orange-500 text-white",
      popularity: 58,
    },

    // Law
    {
      id: "clat",
      name: "CLAT",
      category: "Law",
      gradient: "from-purple-500 to-violet-600 text-white",
      popularity: 100,
    },
    {
      id: "ailet",
      name: "AILET",
      category: "Law",
      gradient: "from-indigo-500 to-blue-700 text-white",
      popularity: 90,
    },
    {
      id: "lsat-in",
      name: "LSAT India",
      category: "Law",
      gradient: "from-cyan-500 to-sky-600 text-white",
      popularity: 85,
    },
    {
      id: "lnat",
      name: "LNAT",
      category: "Law",
      gradient: "from-pink-500 to-fuchsia-600 text-white",
      popularity: 75,
    },
    {
      id: "mhcet-law",
      name: "MH CET Law",
      category: "Law",
      gradient: "from-emerald-400 to-green-500 text-white",
      popularity: 70,
    },
    {
      id: "slat",
      name: "SLAT",
      category: "Law",
      gradient: "from-amber-400 to-yellow-500 text-white",
      popularity: 65,
    },
    {
      id: "culee",
      name: "CULEE",
      category: "Law",
      gradient: "from-blue-400 to-sky-500 text-white",
      popularity: 60,
    },
    {
      id: "ap-lawcet",
      name: "AP LAWCET",
      category: "Law",
      gradient: "from-teal-400 to-cyan-500 text-white",
      popularity: 55,
    },
    {
      id: "ts-lawcet",
      name: "TS LAWCET",
      category: "Law",
      gradient: "from-slate-600 to-slate-700 text-white",
      popularity: 53,
    },
    {
      id: "du-llb",
      name: "DU LLB Entrance (CUET-PG)",
      category: "Law",
      gradient: "from-rose-500 to-pink-600 text-white",
      popularity: 50,
    },

    // Govt Jobs
    {
      id: "upsc",
      name: "UPSC Civil Services",
      category: "Govt. Jobs",
      gradient: "from-orange-500 to-amber-600 text-white",
      popularity: 100,
    },
    {
      id: "ssc-cgl",
      name: "SSC CGL",
      category: "Govt. Jobs",
      gradient: "from-green-500 to-emerald-600 text-white",
      popularity: 95,
    },
    {
      id: "ssc-chsl",
      name: "SSC CHSL",
      category: "Govt. Jobs",
      gradient: "from-teal-500 to-cyan-600 text-white",
      popularity: 90,
    },
    {
      id: "ibps-po",
      name: "IBPS PO",
      category: "Govt. Jobs",
      gradient: "from-blue-500 to-indigo-600 text-white",
      popularity: 88,
    },
    {
      id: "sbi-po",
      name: "SBI PO",
      category: "Govt. Jobs",
      gradient: "from-purple-500 to-violet-600 text-white",
      popularity: 86,
    },
    {
      id: "ibps-clerk",
      name: "IBPS Clerk",
      category: "Govt. Jobs",
      gradient: "from-pink-500 to-fuchsia-600 text-white",
      popularity: 80,
    },
    {
      id: "rrb-ntpc",
      name: "RRB NTPC",
      category: "Govt. Jobs",
      gradient: "from-amber-400 to-yellow-500 text-white",
      popularity: 78,
    },
    {
      id: "rbi-gradeb",
      name: "RBI Grade B",
      category: "Govt. Jobs",
      gradient: "from-slate-600 to-slate-700 text-white",
      popularity: 76,
    },
    {
      id: "lic-aao",
      name: "LIC AAO",
      category: "Govt. Jobs",
      gradient: "from-emerald-400 to-green-500 text-white",
      popularity: 74,
    },
    {
      id: "ssc-gd",
      name: "SSC GD / CAPF",
      category: "Govt. Jobs",
      gradient: "from-cyan-400 to-blue-500 text-white",
      popularity: 72,
    },

    // Study Abroad
    {
      id: "ielts",
      name: "IELTS",
      category: "Study Abroad",
      gradient: "from-purple-500 to-violet-600 text-white",
      popularity: 100,
    },
    {
      id: "toefl",
      name: "TOEFL iBT",
      category: "Study Abroad",
      gradient: "from-indigo-500 to-blue-700 text-white",
      popularity: 90,
    },
    {
      id: "pte",
      name: "PTE Academic",
      category: "Study Abroad",
      gradient: "from-sky-500 to-blue-600 text-white",
      popularity: 85,
    },
    {
      id: "duolingo",
      name: "Duolingo English Test",
      category: "Study Abroad",
      gradient: "from-teal-400 to-cyan-500 text-white",
      popularity: 80,
    },
    {
      id: "sat",
      name: "SAT",
      category: "Study Abroad",
      gradient: "from-yellow-300 to-orange-400 text-white",
      popularity: 78,
    },
    {
      id: "act",
      name: "ACT",
      category: "Study Abroad",
      gradient: "from-pink-500 to-fuchsia-600 text-white",
      popularity: 75,
    },
    {
      id: "gre",
      name: "GRE (General)",
      category: "Study Abroad",
      gradient: "from-green-500 to-emerald-600 text-white",
      popularity: 88,
    },
    {
      id: "gmat-focus",
      name: "GMAT Focus",
      category: "Study Abroad",
      gradient: "from-blue-400 to-indigo-500 text-white",
      popularity: 82,
    },
    {
      id: "lsat-global",
      name: "LSAT (Global)",
      category: "Study Abroad",
      gradient: "from-rose-500 to-pink-600 text-white",
      popularity: 70,
    },
    {
      id: "mcat",
      name: "MCAT",
      category: "Study Abroad",
      gradient: "from-slate-600 to-slate-700 text-white",
      popularity: 68,
    },
  ];

  return { categories, exams };
}
