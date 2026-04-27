import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service.js';

interface AnswerItem {
  questionId: string;
  answerId: string;
}

interface MBTIScores {
  [key: string]: number;
  E: number; I: number;
  S: number; N: number;
  T: number; F: number;
  J: number; P: number;
}

@Injectable()
export class QuizEngineService {
  constructor(private readonly prisma: PrismaService) {}

  /**
   * Score an MBTI quiz submission.
   * Counts how many times each pole was selected across all answers.
   * Returns the 4-letter type (e.g., "INTJ") and dimension scores.
   */
  async scoreMBTI(quizId: string, userAnswers: AnswerItem[]) {
    // Fetch all answers with scoring data (server-side only)
    const answerIds = userAnswers.map((a) => a.answerId);

    const dbAnswers = await this.prisma.answer.findMany({
      where: { id: { in: answerIds } },
      select: {
        id: true,
        mbtiDimension: true,
        mbtiPole: true,
      },
    });

    // Build a lookup
    const answerMap = new Map(dbAnswers.map((a) => [a.id, a]));

    // Count poles
    const scores: MBTIScores = { E: 0, I: 0, S: 0, N: 0, T: 0, F: 0, J: 0, P: 0 };

    for (const ua of userAnswers) {
      const answer = answerMap.get(ua.answerId);
      if (answer?.mbtiPole && answer.mbtiPole in scores) {
        scores[answer.mbtiPole as keyof MBTIScores]++;
      }
    }

    // Determine type
    const type = [
      scores.E >= scores.I ? 'E' : 'I',
      scores.S >= scores.N ? 'S' : 'N',
      scores.T >= scores.F ? 'T' : 'F',
      scores.J >= scores.P ? 'J' : 'P',
    ].join('');

    return {
      resultType: type,
      scoreData: scores,
    };
  }

  /**
   * Submit a quiz: score it and save the result.
   */
  async submitQuiz(
    quizId: string,
    answers: AnswerItem[],
    timeSpentSecs: number,
    userId?: string,
  ) {
    // Get quiz to determine type
    const quiz = await this.prisma.quiz.findUnique({
      where: { id: quizId },
      select: { id: true, quizType: true, title: true },
    });

    if (!quiz) throw new Error('Quiz not found');

    let resultType: string | null = null;
    let scoreData: Record<string, number> = {};

    // Score based on quiz type
    if (quiz.quizType === 'MBTI') {
      const mbtiResult = await this.scoreMBTI(quizId, answers);
      resultType = mbtiResult.resultType;
      scoreData = mbtiResult.scoreData;
    }
    // TODO: SCORED and PERSONALITY types

    // Save result
    const result = await this.prisma.userResult.create({
      data: {
        quizId,
        userId: userId || null,
        answersData: answers as any,
        scoreData: scoreData as any,
        resultType,
        timeSpentSecs,
        isUnlocked: false, // Requires CPA gate
      },
    });

    // Increment completion count (fire-and-forget)
    this.prisma.quiz.update({
      where: { id: quizId },
      data: { completionCount: { increment: 1 } },
    }).catch(() => {});

    return {
      resultId: result.id,
      quizTitle: quiz.title,
      isLocked: true,
    };
  }
}
