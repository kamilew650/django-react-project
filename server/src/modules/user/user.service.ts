import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { hash } from "argon2";
import { DeepPartial, Repository } from "typeorm";
import { LoginInput } from "../auth/auth.input";
import { User } from "./entities/user.entity";

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private readonly userRepository: Repository<User>,
  ) { }

  async findAll(): Promise<User[]> {
    return this.userRepository.find({});
  }

  async findByEmail(userEmail: string): Promise<User> {
    return this.userRepository.findOne({
      where: {
        email: userEmail,
      }
    });
  }

  async addUser(dto: LoginInput): Promise<boolean> {
    const existingUser = await this.userRepository.findOne({
      where: {
        email: dto.email,
      },
    });

    if (existingUser) {
      return false;
    }

    const newUser: DeepPartial<User> = {
      email: dto.email,
      isActive: false,
      password: await hash(dto.password),
    };

    try {
      await this.userRepository.save(newUser);
    } catch (err) {
      console.error("Error: ", err);
      return false;
    }

    return true;
  }
}
