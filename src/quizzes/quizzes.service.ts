import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service.js';

@Injectable()
export class QuizzesService {
  constructor(private readonly prisma: PrismaService) {}

  async findBySlug(slug: string) {
    const quiz = await this.prisma.quiz.findUnique({
      where: { slug },
      include: {
        category: { select: { name: true, slug: true } },
        questions: {
          orderBy: { orderNumber: 'asc' },
          select: {
            id: true,
            content: true,
            orderNumber: true,
            questionType: true,
            answers: {
              select: {
                id: true,
                content: true,
                // ⚠️ KHÔNG trả: mbtiPole, mbtiDimension, scoreValue, isCorrect
              },
            },
          },
        },
      },
    });

    if (!quiz) return null;

    // Increment view count (fire-and-forget)
    this.prisma.quiz.update({
      where: { id: quiz.id },
      data: { viewCount: { increment: 1 } },
    }).catch(() => {});

    return {
      id: quiz.id,
      title: quiz.title,
      slug: quiz.slug,
      description: quiz.description,
      instruction: quiz.instruction,
      quizType: quiz.quizType,
      timeLimitMins: quiz.timeLimitMins,
      totalQuestions: quiz.questions.length,
      viewCount: quiz.viewCount,
      completionCount: quiz.completionCount,
      category: quiz.category,
      questions: quiz.questions,
    };
  }

  async findById(id: string) {
    return this.prisma.quiz.findUnique({
      where: { id },
      include: {
        questions: {
          orderBy: { orderNumber: 'asc' },
          include: { answers: true },
        },
      },
    });
  }
}
