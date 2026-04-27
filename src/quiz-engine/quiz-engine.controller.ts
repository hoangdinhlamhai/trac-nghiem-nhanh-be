import { Controller, Post, Body } from '@nestjs/common';
import { QuizEngineService } from './quiz-engine.service.js';
import { SubmitQuizDto } from './dto/submit-quiz.dto.js';

@Controller('quiz-engine')
export class QuizEngineController {
  constructor(private readonly quizEngineService: QuizEngineService) {}

  @Post('submit')
  async submit(@Body() dto: SubmitQuizDto) {
    return this.quizEngineService.submitQuiz(
      dto.quizId,
      dto.answers,
      dto.timeSpentSecs,
    );
  }
}
