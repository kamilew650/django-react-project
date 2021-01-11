import { Injectable, LoggerService } from "@nestjs/common";

@Injectable()
export class Logger implements LoggerService {
  constructor() {}

  log(message: any, context?: string) {
    if (context) console.log(message, context);
    else console.log(message);
  }

  error(message: any, trace?: string, context?: string) {
    console.error(message, trace, context);
  }

  warn(message: any, context?: string) {
    if (context) console.warn(message, context);
    else console.warn(message);
  }

  debug(message: any, context?: string) {
    if (context) console.debug(message, context);
    else console.debug(message);
  }
}
