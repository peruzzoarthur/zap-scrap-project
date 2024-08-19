import { Module } from '@nestjs/common';
import { HousesService } from './houses.service';
import { HousesController } from './houses.controller';
import { PrismaModule } from 'src/prisma/prisma.module';
import { ZapModule } from 'src/zap/zap.module';
import { PointsService } from 'src/points/points.service';
import { PointsModule } from 'src/points/points.module';
import { AddressesModule } from 'src/addresses/addresses.module';
import { PricingInfoModule } from 'src/pricing-info/pricing-info.module';
import { RentalInfoModule } from 'src/rental-info/rental-info.module';

@Module({
  controllers: [HousesController],
  providers: [HousesService],
  imports: [
    PrismaModule,
    ZapModule,
    PointsModule,
    AddressesModule,
    PricingInfoModule,
    RentalInfoModule,
  ],
})
export class HousesModule {}
