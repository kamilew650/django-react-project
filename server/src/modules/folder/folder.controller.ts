import { Body, Param } from '@nestjs/common';
import { Controller, Delete, Get, Post, UseGuards } from '@nestjs/common';
import { UserPayload } from 'src/shared/user.decorator';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { TokenPayload } from '../auth/token-payload.interface';
import { FolderInput } from './folder.input';
import { FolderService } from './folder.service';

@Controller('folder')
export class FolderController {
  constructor(private readonly folderService: FolderService) { }

  @UseGuards(JwtAuthGuard)
  @Get()
  async findFolders(@UserPayload() user: TokenPayload) {
    return await this.folderService.findFolders(user.userId)
  }

  @UseGuards(JwtAuthGuard)
  @Post()
  async addCard(@UserPayload() user: TokenPayload, @Body() folderInput: FolderInput) {
    return await this.folderService.createFolder(user.userId, folderInput)
  }

  @UseGuards(JwtAuthGuard)
  @Delete('/:id')
  async deleteCard(@UserPayload() user: TokenPayload, @Param('id') id: number) {
    return await this.folderService.deleteFolder(user.userId, id)
  }
}
