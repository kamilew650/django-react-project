import { Module } from "@nestjs/common";
import { Logger } from "./services/logger";

@Module({
  providers: [ Logger],
  exports: [ Logger],
})
export class SharedModule {}
