import { Inject, Injectable, UnauthorizedException } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { verify } from "argon2";
import { User } from "src/modules/user/entities/user.entity";
import { UserService } from "src/modules/user/user.service";

export enum AuthCheckResponseType {
  SUCCESS = "SUCCESS",
  INVALID = "INVALID",
  USER_INACTIVE = "USER_INACTIVE",
}

@Injectable()
export class AuthService {

  constructor(
    @Inject(UserService) private readonly userService: UserService,
    @Inject(JwtService) private readonly jwtService: JwtService,
  ) { }

  async validateUser(
    user: User,
    password: string,
  ): Promise<boolean> {
    if (user && (await verify(user.password, password)))
      return true;
    else
      return false;
  }

  async login(
    dto: LoginInput,
  ): Promise<
    any
  > {
    const user = await this.userService.findByEmail(dto.email);
    const status = await this.validateUser(user, dto.password);
    if (!status) {
      throw new UnauthorizedException('Incorrect login or password');
    }
    else {
      const payload = {
        email: user.email,
        sub: user.id,
        userId: user.id,
      };
      return {
        token: this.jwtService.sign(payload),
        email: user.email,
        id: user.id,
      };
    }
  }
}
