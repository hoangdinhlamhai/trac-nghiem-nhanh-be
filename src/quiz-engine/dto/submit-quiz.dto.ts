import { IsString, IsArray, ValidateNested, IsNumber, Min } from 'class-validator';
import { Type } from 'class-transformer';

class AnswerItemDto {
  @IsString()
  questionId: string;

  @IsString()
  answerId: string;
}

export class SubmitQuizDto {
  @IsString()
  quizId: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => AnswerItemDto)
  answers: AnswerItemDto[];

  @IsNumber()
  @Min(0)
  timeSpentSecs: number;
}
