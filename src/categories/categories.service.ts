import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service.js';

@Injectable()
export class CategoriesService {
  constructor(private readonly prisma: PrismaService) {}

  async findAll() {
    const categories = await this.prisma.category.findMany({
      where: { isActive: true }, // Lấy tất cả danh mục
      orderBy: { displayOrder: 'asc' },
      include: {
        children: {
          where: { isActive: true },
          orderBy: { displayOrder: 'asc' },
          select: { id: true, name: true, slug: true },
        },
        quizzes: {
          where: { isPublished: true },
          orderBy: { createdAt: 'desc' },
          take: 6, // Giới hạn 6 quiz cho homepage
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

    return categories.map((cat) => ({
      id: cat.id,
      name: cat.name,
      slug: cat.slug,
      description: cat.description,
      iconUrl: cat.iconUrl,
      quizCount: cat._count.quizzes,
      children: cat.children,
      quizzes: cat.quizzes,
    }));
  }

  async findBySlug(slug: string) {
    const category = await this.prisma.category.findUnique({
      where: { slug },
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
      quizzes: category.quizzes,
    };
  }
}
