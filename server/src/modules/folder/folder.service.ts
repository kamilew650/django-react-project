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

  async findCards() {
    return await this.folderRepository.find({})
  }

  async createCard(folderInput: FolderInput) {
    const card: DeepPartial<Folder> = {

    }

    try {
      await this.folderRepository.save(card)
      return { message: "Card created." }
    } catch (err) {
      console.error(err)
    }
  }

  async deleteCard(id: number) {
    const card = await this.folderRepository.findOne({ id: id })

    console.log(card)

    if (!card) {
      throw new NotFoundException('Card not found.')
    }
    try {
      await this.folderRepository.remove(card)
      return { message: "Card removed." }
    } catch (err) {
      console.error(err)

    }
  }
}
