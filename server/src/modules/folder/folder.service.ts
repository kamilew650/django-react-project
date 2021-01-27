import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeepPartial, Repository } from 'typeorm';
import { User } from '../user/entities/user.entity';
import { Folder } from './folder.entity';
import { FolderInput } from './folder.input';

@Injectable()
export class FolderService {
  constructor(
    @InjectRepository(User) private readonly userRepository: Repository<User>,
    @InjectRepository(Folder) private readonly folderRepository: Repository<Folder>,
  ) { }

  async findFolders(userId: number) {
    return await this.folderRepository.find({ where: { user_id: userId } })
  }

  async createFolder(userId: number, input: FolderInput) {
    const folder: DeepPartial<Folder> = {
      fromLang: input.fromLang,
      toLang: input.toLang,
      name: input.name,
      user_id: userId,
    }

    try {
      await this.folderRepository.save(folder)
      return { message: "Folder created." }
    } catch (err) {
      console.error(err)
    }
  }

  async deleteFolder(userId: number, id: number) {
    const folder = await this.folderRepository.findOne({ id: id })

    if (!folder) {
      throw new NotFoundException('Folder not found.')
    }
    try {
      await this.folderRepository.remove(folder)
      return { message: "Folder removed." }
    } catch (err) {
      console.error(err)

    }
  }
}
