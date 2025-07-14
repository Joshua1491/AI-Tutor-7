export interface Video {
  id: string;
  youtube_id: string;
  title: string;
  duration_seconds: number;
  difficulty: "beginner" | "intermediate" | "advanced";
  mcqs: MCQ[];
}

export interface MCQ {
  id: string;
  question: string;
  options: string[];
  correct_index: number;
  hint: string | null;
}

export interface MCQWithVideo extends MCQ {
  video: Pick<Video, "id" | "youtube_id" | "title">;
}
