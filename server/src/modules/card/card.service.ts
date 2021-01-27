import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeepPartial, Repository } from 'typeorm';
import { Card } from './card.entity';
import { AddCardInput } from './card.input';

@Injectable()
export class CardService {
  constructor(@InjectRepository(Card) private readonly cardRepository: Repository<Card>) { }

  async findCards(userId: number) {
    return await this.cardRepository.find({ where: { user_id: userId } })
  }

  async createCard(userId: number, cardInput: AddCardInput) {
    const card: DeepPartial<Card> = {
      before: cardInput.before,
      after: cardInput.after,
      user_id: userId
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
      return { message: "Card removed." }
    } catch (err) {
      console.error(err)

    }
  }
}
