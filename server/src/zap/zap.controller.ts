import { Controller, Get } from '@nestjs/common';
import { ZapService } from './zap.service';

@Controller('zap')
export class ZapController {
  constructor(private readonly zapService: ZapService) {}
  @Get('json')
  parseJson() {
    return this.zapService.parseJson();
  }
}
