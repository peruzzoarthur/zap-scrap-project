import { Module } from '@nestjs/common';
import { ZapController } from './zap.controller';
import { ZapService } from './zap.service';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [HttpModule],
  controllers: [ZapController],
  providers: [ZapService],
  exports: [ZapService],
})
export class ZapModule {}
