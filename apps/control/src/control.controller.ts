import { Controller, Get } from '@nestjs/common';
import { ControlService } from './control.service';

@Controller()
export class ControlController {
  constructor(private readonly controlService: ControlService) {}

  @Get()
  getHello(): string {
    return this.controlService.getHello();
  }
}
