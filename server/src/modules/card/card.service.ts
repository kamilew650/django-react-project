import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeepPartial, Repository } from 'typeorm';
import { Card } from './card.entity';
import { AddCardInput } from './card.input';

@Injectable()
export class CardService {
  constructor(@InjectRepository(Card) private readonly cardRepository: Repository<Card>) {}

  async findCards() {
    return await this.cardRepository.find({})
  }

  async createCard(cardInput: AddCardInput) {
    const card: DeepPartial<Card> = {
      originalContent: cardInput.originalContent,
      translatedContent: cardInput.translatedContent,
    }

    try {
      await this.cardRepository.save(card)
      return { message: "Card created."}
    } catch(err) {
      console.error(err)
    }
  }

  async deleteCard(id: number) {
    const card = await this.cardRepository.findOne({id: id})

    console.log(card)

    if(!card) {
      throw new NotFoundException('Card not found.')
    }
    try {
      await this.cardRepository.remove(card)
      return { message: "Card removed."}
    } catch(err) {
      console.error(err)

    }
  }
}
