import { NestFactory } from '@nestjs/core';
import { ControlModule } from './control.module';

async function bootstrap() {
  const app = await NestFactory.create(ControlModule);
  await app.listen(3000);
}
bootstrap();
