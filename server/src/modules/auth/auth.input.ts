import { IsEmail, IsNotEmpty, IsString, MinLength } from "class-validator";

export class LoginInput {
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsNotEmpty()
  @IsString()
  @MinLength(6)
  password: string;
}