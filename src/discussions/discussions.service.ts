import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service.js';
import type { CreateCommentDto } from './dto/create-comment.dto.js';

@Injectable()
export class DiscussionsService {
  constructor(private readonly prisma: PrismaService) {}

  /**
   * Danh sách tất cả bài thảo luận (published).
   * Kèm số lượng comments.
   */
  async findAll() {
    const discussions = await this.prisma.discussion.findMany({
      where: { isPublished: true },
      orderBy: { createdAt: 'desc' },
      include: {
        _count: { select: { comments: true } },
      },
    });

    return discussions.map((d) => ({
      id: d.id,
      title: d.title,
      slug: d.slug,
      excerpt: d.excerpt,
      tag: d.tag,
      authorName: d.authorName,
      commentCount: d._count.comments,
      createdAt: d.createdAt.toISOString(),
    }));
  }

  /**
   * Chi tiết 1 bài thảo luận + toàn bộ comments (mới nhất trước).
   */
  async findBySlug(slug: string) {
    const discussion = await this.prisma.discussion.findUnique({
      where: { slug },
      include: {
        comments: {
          orderBy: { createdAt: 'desc' },
          select: {
            id: true,
            authorName: true,
            content: true,
            createdAt: true,
          },
        },
        _count: { select: { comments: true } },
      },
    });

    if (!discussion) {
      throw new NotFoundException('Không tìm thấy bài thảo luận');
    }

    return {
      id: discussion.id,
      title: discussion.title,
      slug: discussion.slug,
      content: discussion.content,
      excerpt: discussion.excerpt,
      tag: discussion.tag,
      authorName: discussion.authorName,
      commentCount: discussion._count.comments,
      createdAt: discussion.createdAt.toISOString(),
      comments: discussion.comments.map((c) => ({
        id: c.id,
        authorName: c.authorName,
        content: c.content,
        createdAt: c.createdAt.toISOString(),
      })),
    };
  }

  /**
   * Tạo comment mới — auto-approved.
   */
  async createComment(slug: string, dto: CreateCommentDto) {
    const discussion = await this.prisma.discussion.findUnique({
      where: { slug },
      select: { id: true },
    });

    if (!discussion) {
      throw new NotFoundException('Không tìm thấy bài thảo luận');
    }

    const comment = await this.prisma.comment.create({
      data: {
        discussionId: discussion.id,
        authorName: dto.authorName,
        authorEmail: dto.authorEmail,
        content: dto.content,
      },
      select: {
        id: true,
        authorName: true,
        content: true,
        createdAt: true,
      },
    });

    return {
      id: comment.id,
      authorName: comment.authorName,
      content: comment.content,
      createdAt: comment.createdAt.toISOString(),
    };
  }
}
