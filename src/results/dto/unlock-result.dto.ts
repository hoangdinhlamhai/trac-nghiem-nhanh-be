import { IsString, IsNotEmpty, MaxLength } from 'class-validator';

export class UnlockResultDto {
  @IsString()
  @IsNotEmpty()
  @MaxLength(10)
  code: string;

  @IsString()
  @IsNotEmpty()
  @MaxLength(10)
  expectedCode: string;
}
