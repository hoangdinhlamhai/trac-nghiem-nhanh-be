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
   * Score a SCORED quiz submission.
   * Detects quiz subtype by category:
   * - Category 'test-tam-ly' → psychology scale (count correct as score, show as scale)
   * - Other categories → standard test (count correct answers, show as percentage)
   */
  async scoreScored(quizId: string, userAnswers: AnswerItem[]) {
    // Check category to determine scoring mode
    const quiz = await this.prisma.quiz.findUnique({
      where: { id: quizId },
      select: { category: { select: { slug: true } } },
    });

    const isPsychologyTest = quiz?.category?.slug === 'test-tam-ly';

    const answerIds = userAnswers.map((a) => a.answerId);

    const dbAnswers = await this.prisma.answer.findMany({
      where: { id: { in: answerIds } },
      select: {
        id: true,
        isCorrect: true,
      },
    });

    const answerMap = new Map(dbAnswers.map((a) => [a.id, a]));

    let correct = 0;
    for (const ua of userAnswers) {
      const answer = answerMap.get(ua.answerId);
      if (answer?.isCorrect) {
        correct++;
      }
    }

    if (isPsychologyTest) {
      // Psychology test: correct answers = "best" answers, show as scale
      return {
        correct,
        total: userAnswers.length,
        isScale: 1,
        scaleScore: correct,
        scaleMax: userAnswers.length,
      };
    }

    // Standard test: count correct answers
    return {
      correct,
      total: userAnswers.length,
      isScale: 0,
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
    } else if (quiz.quizType === 'SCORED') {
      const scoredResult = await this.scoreScored(quizId, answers);
      if (scoredResult.isScale) {
        resultType = String(scoredResult.scaleScore ?? 0);
      } else {
        resultType = String(scoredResult.correct);
      }
      scoreData = scoredResult as any;
    }
    // TODO: PERSONALITY type

    // Save result
    const result = await this.prisma.userResult.create({
      data: {
        quizId,
        userId: userId || null,
        answersData: answers as any,
        scoreData: scoreData as any,
        resultType,
        timeSpentSecs,
        isUnlocked: false, // Locked by default — user phải nhập mã để xem kết quả
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
