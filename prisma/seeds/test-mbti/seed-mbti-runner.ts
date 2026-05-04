import { PrismaClient, QuestionType, QuizType } from '@prisma/client';

const prisma = new PrismaClient();

export interface MBTIAnswer {
  content: string;
  mbtiDimension: string; // "EI", "SN", "TF", "JP"
  mbtiPole: string;      // "E","I","S","N","T","F","J","P"
}

export interface MBTIQuestion {
  content: string;
  answers: MBTIAnswer[];
}

export interface MBTIQuizSeedData {
  categorySlug: string;
  title: string;
  slug: string;
  description: string;
  instruction: string;
  timeLimitMins: number;
  questions: MBTIQuestion[];
}

export async function seedMBTIQuizList(quizzes: MBTIQuizSeedData[]) {
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
        quizType: QuizType.MBTI,
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
              isCorrect: false,
              scoreValue: 0,
              mbtiDimension: a.mbtiDimension,
              mbtiPole: a.mbtiPole,
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
