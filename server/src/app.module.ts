import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import * as ormConfig from './ormconfig';
import { SharedModule } from './shared/shared.module';
import { join } from 'path';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CardModule } from './modules/card/card.module';
import { UserModule } from './modules/user/user.module';
import { AuthModule } from './modules/auth/auth.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(ormConfig[0]),
    SharedModule,
    CardModule,
    AuthModule,
    UserModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
