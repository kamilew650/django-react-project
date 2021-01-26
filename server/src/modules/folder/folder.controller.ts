import { Controller } from '@nestjs/common';
import { FolderService } from './folder.service';

@Controller('folder')
export class FolderController {
  constructor(private readonly folderService: FolderService) { }
  @Get()
  async findFolders() {
    return await this.folderService.findFolders()
  }

  @Post()
  async addCard(@Body() folderInput: FolderInput) {
    return await this.folderService.createFolder(folderInput)
  }

  @Delete()
  async deleteCard(@Body('id') id: number) {
    console.log(id)
    return await this.folderService.deleteFolder(id)
  }
}
