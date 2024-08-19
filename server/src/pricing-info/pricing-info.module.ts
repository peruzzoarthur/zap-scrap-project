import { Module } from '@nestjs/common';
import { PricingInfoService } from './pricing-info.service';
import { PricingInfoController } from './pricing-info.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  controllers: [PricingInfoController],
  providers: [PricingInfoService],
  imports: [PrismaModule],
  exports: [PricingInfoService],
})
export class PricingInfoModule {}
