import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PricingInfoService } from './pricing-info.service';
import { CreatePricingInfoDto } from './dto/create-pricing-info.dto';
import { UpdatePricingInfoDto } from './dto/update-pricing-info.dto';

@Controller('pricing-info')
export class PricingInfoController {
  constructor(private readonly pricingInfoService: PricingInfoService) {}

  @Post()
  create(@Body() createPricingInfoDto: CreatePricingInfoDto) {
    return this.pricingInfoService.create(createPricingInfoDto);
  }

  @Get()
  findAll() {
    return this.pricingInfoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.pricingInfoService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePricingInfoDto: UpdatePricingInfoDto) {
    return this.pricingInfoService.update(+id, updatePricingInfoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.pricingInfoService.remove(+id);
  }
}
