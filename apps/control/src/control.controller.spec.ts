import { Test, TestingModule } from '@nestjs/testing';
import { ControlController } from './control.controller';
import { ControlService } from './control.service';

describe('ControlController', () => {
  let controlController: ControlController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [ControlController],
      providers: [ControlService],
    }).compile();

    controlController = app.get<ControlController>(ControlController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(controlController.getHello()).toBe('Hello World!');
    });
  });
});
