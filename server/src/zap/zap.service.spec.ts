import { Test, TestingModule } from '@nestjs/testing';
import { ZapService } from './zap.service';

describe('ZapService', () => {
  let service: ZapService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ZapService],
    }).compile();

    service = module.get<ZapService>(ZapService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
