import { Body, Controller, Post, UnauthorizedException } from '@nestjs/common';
import { UserService } from '../user/user.service';
import { LoginInput } from './auth.input';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(
    private readonly userService: UserService, //
    private readonly authService: AuthService,
  ) { }

  @Post("/login")
  async login(@Body() loginInput: LoginInput) {
    return await this.authService.login(loginInput);
  }

  @Post("/registration")
  async registration(@Body() loginInput: LoginInput) {
    const valid = await this.userService.addUser(loginInput)
    console.log(valid)
    if (valid) {
      return await this.authService.login(loginInput);
    } else {
      throw new UnauthorizedException("Incorrect email or password.");
    }
  }
}
