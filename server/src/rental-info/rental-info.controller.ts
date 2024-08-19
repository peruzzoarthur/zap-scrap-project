import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { RentalInfoService } from './rental-info.service';
import { CreateRentalInfoDto } from './dto/create-rental-info.dto';
import { UpdateRentalInfoDto } from './dto/update-rental-info.dto';

@Controller('rental-info')
export class RentalInfoController {
  constructor(private readonly rentalInfoService: RentalInfoService) {}

  @Post()
  create(@Body() createRentalInfoDto: CreateRentalInfoDto) {
    return this.rentalInfoService.create(createRentalInfoDto);
  }

  @Get()
  findAll() {
    return this.rentalInfoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.rentalInfoService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateRentalInfoDto: UpdateRentalInfoDto) {
    return this.rentalInfoService.update(+id, updateRentalInfoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.rentalInfoService.remove(+id);
  }
}
