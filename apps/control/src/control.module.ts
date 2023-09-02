import { Module } from '@nestjs/common';
import { ControlController } from './control.controller';
import { ControlService } from './control.service';

@Module({
  imports: [],
  controllers: [ControlController],
  providers: [ControlService],
})
export class ControlModule {}
