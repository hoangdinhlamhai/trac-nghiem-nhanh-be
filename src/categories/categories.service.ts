import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service.js';

@Injectable()
export class CategoriesService {
  constructor(private readonly prisma: PrismaService) {}

  /**
   * Homepage: chỉ lấy danh mục gốc (parentId = null)
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
        quizzes: {
          where: { isPublished: true },
          orderBy: { createdAt: 'desc' },
          take: 6,
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
