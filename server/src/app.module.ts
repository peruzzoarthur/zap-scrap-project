import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AmazonModule } from './amazon/amazon.module';
import { ConfigModule } from '@nestjs/config';
import { ZapModule } from './zap/zap.module';

@Module({
  imports: [AmazonModule, ConfigModule.forRoot({ isGlobal: true }), ZapModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
