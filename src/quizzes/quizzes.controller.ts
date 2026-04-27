import { Controller, Get, Param, NotFoundException } from '@nestjs/common';
import { QuizzesService } from './quizzes.service.js';

@Controller('quizzes')
export class QuizzesController {
  constructor(private readonly quizzesService: QuizzesService) {}

  @Get(':slug')
  async findBySlug(@Param('slug') slug: string) {
    const quiz = await this.quizzesService.findBySlug(slug);
    if (!quiz) throw new NotFoundException('Không tìm thấy bài test');
    return quiz;
  }
}
