import { Controller, Get } from '@nestjs/common';
import { ZapService } from './zap.service';

@Controller('zap')
export class ZapController {
  constructor(private readonly zapService: ZapService) {}

  // @Get()
  // saveJson() {
  //   return this.zapService.saveJson();
  // }

  @Get('json')
  parseJson() {
    return this.zapService.parseJson();
  }

  @Get('test')
  test() {
    return this.zapService.test();
  }
}

// @Get('url')
// getUrl() {
//   return this.zapService.createUrl();
// }
