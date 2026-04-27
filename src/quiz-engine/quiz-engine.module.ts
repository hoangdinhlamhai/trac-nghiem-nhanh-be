import { Module } from '@nestjs/common';
import { QuizEngineController } from './quiz-engine.controller.js';
import { QuizEngineService } from './quiz-engine.service.js';

@Module({
  controllers: [QuizEngineController],
  providers: [QuizEngineService],
  exports: [QuizEngineService],
})
export class QuizEngineModule {}
