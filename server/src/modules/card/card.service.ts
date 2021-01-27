import { Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeepPartial, Repository } from 'typeorm';
import { Folder } from '../folder/folder.entity';
import { Card } from './card.entity';
import { AddCardInput } from './card.input';

@Injectable()
export class CardService {
  constructor(
    @InjectRepository(Card) private readonly cardRepository: Repository<Card>, //
    @InjectRepository(Folder) private readonly folderRepository: Repository<Folder>
  ) { }

  async findCards(userId: number) {
    return await this.cardRepository.find({ where: { user_id: userId } })
  }

  async findRandomCards(userId: number, folderId: number) {
    return await this.cardRepository
      .createQueryBuilder()
      .orderBy("RANDOM()")
      .where('user_id = :userId', { userId: userId })
      .andWhere('folder_id = :folderId', { folderId: folderId })
      .limit(20)
      .getMany()
  }

  async findCardsByFolderId(userId: number, folderId: number) {
    return await this.cardRepository.find({ where: { user_id: userId, folder_id: folderId } })
  }

  async createCard(userId: number, cardInput: AddCardInput) {
    const folder = this.folderRepository.findOne({ where: { id: cardInput.folder_id } })

    if (!folder) {
      throw new NotFoundException('Folder not found.')
    }

    const card: DeepPartial<Card> = {
      before: cardInput.before,
      after: cardInput.after,
      user_id: userId,
      folder_id: cardInput.folder_id
    }

    try {
      await this.cardRepository.save(card)
      return { message: "Card created." }
    } catch (err) {
      console.error(err)
    }
  }

  async deleteCard(userId: number, id: number) {
    const card = await this.cardRepository.findOne({ id: id })

    if (!card) {
      throw new NotFoundException('Card not found.')
    }
    try {
      await this.cardRepository.remove(card)
      return { message: "Card removed.", cardId: card.id }
    } catch (err) {
      console.error(err)
      throw new InternalServerErrorException('Unknown error.')
    }
  }
}
