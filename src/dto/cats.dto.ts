import { IsEmail, IsNotEmpty } from 'class-validator';
export class CatsDto {
  @IsNotEmpty()
  name: string;
  @IsNotEmpty()
  age: number;
}
