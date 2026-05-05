import { Controller, Get, Post, Param, Body } from '@nestjs/common';
import { DiscussionsService } from './discussions.service.js';
import { CreateCommentDto } from './dto/create-comment.dto.js';

@Controller('discussions')
export class DiscussionsController {
  constructor(private readonly discussionsService: DiscussionsService) {}

  @Get()
  findAll() {
    return this.discussionsService.findAll();
  }

  @Get(':slug')
  findBySlug(@Param('slug') slug: string) {
    return this.discussionsService.findBySlug(slug);
  }

  @Post(':slug/comments')
  createComment(
    @Param('slug') slug: string,
    @Body() dto: CreateCommentDto,
  ) {
    return this.discussionsService.createComment(slug, dto);
  }
}
