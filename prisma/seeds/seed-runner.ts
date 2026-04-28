import { PrismaClient, QuestionType } from '@prisma/client';
import { QuizSeedData } from './types';

const prisma = new PrismaClient();

/**
 * Seed một danh sách quiz vào DB.
 * Tự skip nếu quiz slug đã tồn tại hoặc category không tìm thấy.
 */
export async function seedQuizList(quizzes: QuizSeedData[]) {
  let created = 0;
  let skipped = 0;

  for (const q of quizzes) {
    const category = await prisma.category.findUnique({ where: { slug: q.categorySlug } });
    if (!category) {
      console.log(`  ⚠️  Category "${q.categorySlug}" không tồn tại → bỏ qua "${q.title}"`);
      skipped++;
      continue;
    }

    const existing = await prisma.quiz.findUnique({ where: { slug: q.slug } });
    if (existing) {
      console.log(`  ⏭️  "${q.title}" đã tồn tại → bỏ qua`);
      skipped++;
      continue;
    }

    const quiz = await prisma.quiz.create({
      data: {
        categoryId: category.id,
        title: q.title,
        slug: q.slug,
        description: q.description,
        instruction: q.instruction,
        quizType: q.quizType,
        timeLimitMins: q.timeLimitMins,
        totalQuestions: q.questions.length,
        isPublished: true,
      },
    });

    for (let i = 0; i < q.questions.length; i++) {
      const question = q.questions[i];
      await prisma.question.create({
        data: {
          quizId: quiz.id,
          content: question.content,
          orderNumber: i + 1,
          questionType: QuestionType.SINGLE,
          answers: {
            create: question.answers.map((a) => ({
              content: a.content,
              isCorrect: a.isCorrect,
              scoreValue: a.isCorrect ? 1 : 0,
              mbtiDimension: null,
              mbtiPole: null,
            })),
          },
        },
      });
    }

    created++;
    console.log(`  ✅ ${q.title} (${q.questions.length} câu)`);
  }

  return { created, skipped };
}

export { prisma };
