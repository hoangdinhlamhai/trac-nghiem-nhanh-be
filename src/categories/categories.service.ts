import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service.js';

@Injectable()
export class CategoriesService {
  constructor(private readonly prisma: PrismaService) {}

  /**
   * Homepage: lấy danh mục gốc (parentId = null).
   * Với category có children (phân cấp), gom quizzes từ tất cả children
   * rồi lấy ngẫu nhiên tối đa 6 đề để hiển thị trên trang chủ.
   */
  async findAll() {
    const categories = await this.prisma.category.findMany({
      where: { isActive: true, parentId: null },
      orderBy: { displayOrder: 'asc' },
      include: {
        children: {
          where: { isActive: true },
          orderBy: { displayOrder: 'asc' },
          select: { id: true, name: true, slug: true },
        },
        // Quizzes trực tiếp thuộc category gốc (VD: Test MBTI, Test Tâm Lý)
        quizzes: {
          where: { isPublished: true },
          orderBy: { createdAt: 'desc' },
          select: {
            id: true,
            title: true,
            slug: true,
            description: true,
            quizType: true,
            timeLimitMins: true,
            totalQuestions: true,
            viewCount: true,
            completionCount: true,
          },
        },
        _count: { select: { quizzes: { where: { isPublished: true } } } },
      },
    });

    // Xử lý từng category: nếu có children thì gom quizzes từ children
    const result = await Promise.all(
      categories.map(async (cat) => {
        let quizzes = cat.quizzes;
        let totalQuizCount = cat._count.quizzes;

        // Nếu category có children và chưa có quizzes trực tiếp → lấy từ children
        if (cat.children.length > 0) {
          const childIds = cat.children.map((c) => c.id);
          const childQuizzes = await this.prisma.quiz.findMany({
            where: {
              categoryId: { in: childIds },
              isPublished: true,
            },
            select: {
              id: true,
              title: true,
              slug: true,
              description: true,
              quizType: true,
              timeLimitMins: true,
              totalQuestions: true,
              viewCount: true,
              completionCount: true,
            },
          });

          // Gộp quizzes trực tiếp + quizzes từ children
          const allQuizzes = [...quizzes, ...childQuizzes];
          totalQuizCount = allQuizzes.length;

          // Lấy ngẫu nhiên tối đa 6 đề
          quizzes = this.pickRandom(allQuizzes, 6);
        } else {
          // Category không có children → lấy tối đa 6 đề mới nhất
          quizzes = quizzes.slice(0, 6);
        }

        return {
          id: cat.id,
          name: cat.name,
          slug: cat.slug,
          description: cat.description,
          iconUrl: cat.iconUrl,
          quizCount: totalQuizCount,
          children: cat.children,
          quizzes,
        };
      }),
    );

    return result;
  }

  /** Lấy ngẫu nhiên n phần tử từ mảng */
  private pickRandom<T>(arr: T[], n: number): T[] {
    const shuffled = [...arr].sort(() => Math.random() - 0.5);
    return shuffled.slice(0, n);
  }

  /**
   * Trang chi tiết: trả category + children (kèm quizzes) + quizzes trực tiếp
   */
  async findBySlug(slug: string) {
    const category = await this.prisma.category.findUnique({
      where: { slug },
      include: {
        // Quizzes trực tiếp thuộc category này
        quizzes: {
          where: { isPublished: true },
          orderBy: { createdAt: 'desc' },
          select: {
            id: true,
            title: true,
            slug: true,
            description: true,
            quizType: true,
            timeLimitMins: true,
            totalQuestions: true,
            viewCount: true,
            completionCount: true,
          },
        },
        // Danh mục con + quizzes của từng danh mục con
        children: {
          where: { isActive: true },
          orderBy: { displayOrder: 'asc' },
          include: {
            quizzes: {
              where: { isPublished: true },
              orderBy: { createdAt: 'desc' },
              select: {
                id: true,
                title: true,
                slug: true,
                description: true,
                quizType: true,
                timeLimitMins: true,
                totalQuestions: true,
                viewCount: true,
                completionCount: true,
              },
            },
            _count: { select: { quizzes: { where: { isPublished: true } } } },
          },
        },
        _count: { select: { quizzes: { where: { isPublished: true } } } },
      },
    });

    if (!category) {
      throw new NotFoundException('Không tìm thấy danh mục');
    }

    return {
      id: category.id,
      name: category.name,
      slug: category.slug,
      description: category.description,
      iconUrl: category.iconUrl,
      quizCount: category._count.quizzes,
      quizzes: category.quizzes,
      children: category.children.map((child) => ({
        id: child.id,
        name: child.name,
        slug: child.slug,
        description: child.description,
        quizCount: child._count.quizzes,
        quizzes: child.quizzes,
      })),
    };
  }
}
