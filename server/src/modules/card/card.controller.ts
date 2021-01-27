import { Body, Controller, Delete, Get, Param, Post, UseGuards } from '@nestjs/common';
import { UserPayload } from 'src/shared/user.decorator';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { TokenPayload } from '../auth/token-payload.interface';
import { AddCardInput } from './card.input';
import { CardService } from './card.service';

@Controller('card')
export class CardController {
  constructor(private readonly cardService: CardService) { }

  @UseGuards(JwtAuthGuard)
  @Get()
  async findCards(@UserPayload() user: TokenPayload,) {
    return await this.cardService.findCards(user.userId)
  }

  @UseGuards(JwtAuthGuard)
  @Post()
  async addCard(@UserPayload() user: TokenPayload, @Body() cardInput: AddCardInput) {
    return await this.cardService.createCard(user.userId, cardInput)
  }

  @UseGuards(JwtAuthGuard)
  @Delete()
  async deleteCard(@UserPayload() user: TokenPayload, @Param('id') id: number) {
    console.log(id)
    return await this.cardService.deleteCard(user.userId, id)
  }
}
