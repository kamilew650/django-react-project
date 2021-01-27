import { IsString } from "class-validator";

export class FolderInput {
  @IsString()
  name: string;

  @IsString()
  fromLang: string;

  @IsString()
  toLang: string;
}