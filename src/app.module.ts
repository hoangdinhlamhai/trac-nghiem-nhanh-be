import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { PrismaModule } from './prisma/prisma.module.js';
import { CategoriesModule } from './categories/categories.module.js';
import { QuizzesModule } from './quizzes/quizzes.module.js';
import { QuizEngineModule } from './quiz-engine/quiz-engine.module.js';
import { ResultsModule } from './results/results.module.js';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    PrismaModule,
    CategoriesModule,
    QuizzesModule,
    QuizEngineModule,
    ResultsModule,
  ],
})
export class AppModule {}

