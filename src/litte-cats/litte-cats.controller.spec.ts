import { Test, TestingModule } from '@nestjs/testing';
import { LitteCatsController } from './litte-cats.controller';

describe('LitteCatsController', () => {
  let controller: LitteCatsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [LitteCatsController],
    }).compile();

    controller = module.get<LitteCatsController>(LitteCatsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
