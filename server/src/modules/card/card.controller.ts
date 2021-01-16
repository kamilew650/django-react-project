import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { AddCardInput } from './card.input';
import { CardService } from './card.service';

@Controller('card')
export class CardController {
  constructor(private readonly cardService: CardService) {}

  @Get()
  async findCards() {
    return await this.cardService.findCards()
  }

  @Post()
  async addCard(@Body() cardInput: AddCardInput) {
    return await this.cardService.createCard(cardInput)
  }

  @Delete()
  async deleteCard(@Body('id') id: number) {
    console.log(id)
    return await this.cardService.deleteCard(id)
  }
}
