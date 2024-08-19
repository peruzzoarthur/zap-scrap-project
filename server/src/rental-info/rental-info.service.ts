import { Injectable } from '@nestjs/common';
import { CreateRentalInfoDto } from './dto/create-rental-info.dto';
import { UpdateRentalInfoDto } from './dto/update-rental-info.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class RentalInfoService {
  constructor(private prisma: PrismaService) {}
  async create(createRentalInfoDto: CreateRentalInfoDto) {
    return await this.prisma.rentalInfo.create({
      data: {
        monthlyRentalTotalPrice:
          createRentalInfoDto.monthlyRentalTotalPrice ?? 0,
        period: createRentalInfoDto.period,
        warranties: createRentalInfoDto.warranties,
      },
    });
  }

  findAll() {
    return `This action returns all rentalInfo`;
  }

  findOne(id: number) {
    return `This action returns a #${id} rentalInfo`;
  }

  update(id: number, updateRentalInfoDto: UpdateRentalInfoDto) {
    return `This action updates a #${id} rentalInfo`;
  }

  remove(id: number) {
    return `This action removes a #${id} rentalInfo`;
  }
}
