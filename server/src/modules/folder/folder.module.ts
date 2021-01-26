import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from '../user/entities/user.entity';
import { FolderController } from './folder.controller';
import { Folder } from './folder.entity';
import { FolderService } from './folder.service';

@Module({
  imports: [TypeOrmModule.forFeature([User, Folder])],
  controllers: [FolderController],
  providers: [FolderService]
})
export class FolderModule { }
