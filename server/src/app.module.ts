import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { ZapModule } from './zap/zap.module';
import { PrismaModule } from './prisma/prisma.module';
import { HousesModule } from './houses/houses.module';

@Module({
  imports: [ConfigModule.forRoot({ isGlobal: true }), ZapModule, PrismaModule, HousesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
