import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { UserModule } from '../user/user.module';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [
    UserModule,
    PassportModule,
    JwtModule.register({
      secret: process.env.JWT_SECRET || 'sgsdf8g8sfgs8hsfgh8',
      signOptions: { expiresIn: "365d" },
    }),],
  providers: [AuthService],
  controllers: [AuthController]
})
export class AuthModule { }
