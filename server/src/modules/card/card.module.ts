import { Module } from '@nestjs/common';
import { CardService } from './card.service';
import { CardController } from './card.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Card } from './card.entity';
import { Folder } from '../folder/folder.entity';
import { JwtStrategy } from '../auth/jwt.strategy';

@Module({
  imports: [TypeOrmModule.forFeature([Card, Folder]),],
  providers: [CardService, JwtStrategy],
  controllers: [CardController]
})
export class CardModule { }
