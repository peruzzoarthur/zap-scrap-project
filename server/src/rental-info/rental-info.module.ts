import { Module } from '@nestjs/common';
import { RentalInfoService } from './rental-info.service';
import { RentalInfoController } from './rental-info.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  controllers: [RentalInfoController],
  providers: [RentalInfoService],
  imports: [PrismaModule],
  exports: [RentalInfoService],
})
export class RentalInfoModule {}
