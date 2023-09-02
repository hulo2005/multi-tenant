import { Injectable } from '@nestjs/common';

@Injectable()
export class ControlService {
  getHello(): string {
    return 'Hello World!';
  }
}
