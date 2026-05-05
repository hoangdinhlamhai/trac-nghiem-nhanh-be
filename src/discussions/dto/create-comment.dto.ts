import { IsNotEmpty, IsString, IsEmail, MaxLength, IsOptional } from 'class-validator';

export class CreateCommentDto {
  @IsString()
  @IsNotEmpty({ message: 'Tên không được để trống' })
  @MaxLength(100)
  authorName: string;

  @IsEmail({}, { message: 'Email không hợp lệ' })
  @IsNotEmpty({ message: 'Email không được để trống' })
  @MaxLength(255)
  authorEmail: string;

  @IsString()
  @IsNotEmpty({ message: 'Nội dung bình luận không được để trống' })
  content: string;
}
