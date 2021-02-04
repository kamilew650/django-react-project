import { Injectable } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { ExtractJwt, Strategy } from "passport-jwt";
import { TokenPayload } from "./token-payload.interface";

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: process.env.JWT_SECRET || 'sgsdf8g8sfgs8hsfgh8',
    });
  }

  async validate(payload: any): Promise<TokenPayload> {
    return {
      userId: payload.sub,
      email: payload.email,
    } as TokenPayload;
  }
}
