import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { User } from "./entities/user.entity";
import { UserService } from "./user.service";


const services = [
  UserService,
];

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  providers: [...services],
  exports: [UserService],
})
export class UserModule { }
