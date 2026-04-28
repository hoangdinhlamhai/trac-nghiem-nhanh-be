import { QuizType } from '@prisma/client';

export interface ScoredQuestion {
  content: string;
  answers: { content: string; isCorrect: boolean }[];
}

export interface QuizSeedData {
  categorySlug: string;
  title: string;
  slug: string;
  description: string;
  instruction: string;
  quizType: QuizType;
  timeLimitMins: number;
  questions: ScoredQuestion[];
}
