import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { ZapModule } from './zap/zap.module';
import { PrismaModule } from './prisma/prisma.module';
import { HousesModule } from './houses/houses.module';
import { AddressesModule } from './addresses/addresses.module';
import { PointsModule } from './points/points.module';
import { PricingInfoModule } from './pricing-info/pricing-info.module';
import { RentalInfoModule } from './rental-info/rental-info.module';
import { MediasModule } from './medias/medias.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    ZapModule,
    PrismaModule,
    HousesModule,
    AddressesModule,
    PointsModule,
    PricingInfoModule,
    RentalInfoModule,
    MediasModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
