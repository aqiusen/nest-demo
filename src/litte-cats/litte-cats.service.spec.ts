import { Test, TestingModule } from '@nestjs/testing';
import { LitteCatsService } from './litte-cats.service';

describe('LitteCatsService', () => {
  let service: LitteCatsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [LitteCatsService],
    }).compile();

    service = module.get<LitteCatsService>(LitteCatsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
