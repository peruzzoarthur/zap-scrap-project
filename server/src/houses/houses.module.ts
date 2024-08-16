import { Module } from '@nestjs/common';
import { HousesService } from './houses.service';
import { HousesController } from './houses.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  controllers: [HousesController],
  providers: [HousesService],
  imports: [PrismaModule],
})
export class HousesModule {}
