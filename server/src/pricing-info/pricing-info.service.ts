import { Injectable } from '@nestjs/common';
import { CreatePricingInfoDto } from './dto/create-pricing-info.dto';
import { UpdatePricingInfoDto } from './dto/update-pricing-info.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class PricingInfoService {
  constructor(private prisma: PrismaService) {}
  async create(createPricingInfoDto: CreatePricingInfoDto) {
    return await this.prisma.pricingInfo.create({
      data: {
        businessType: createPricingInfoDto.businessType ?? '?',
        monthlyCondoFee: createPricingInfoDto.monthlyCondoFee ?? null,
        price: createPricingInfoDto.price ?? 0,
        rentalInfo: {
          connect: {
            id: createPricingInfoDto.rentalInfoId,
          },
        },
        yearlyIptu: createPricingInfoDto.yearlyIptu ?? null,
      },
    });
  }

  findAll() {
    return `This action returns all pricingInfo`;
  }

  findOne(id: number) {
    return `This action returns a #${id} pricingInfo`;
  }

  update(id: number, updatePricingInfoDto: UpdatePricingInfoDto) {
    return `This action updates a #${id} pricingInfo`;
  }

  remove(id: number) {
    return `This action removes a #${id} pricingInfo`;
  }
}
