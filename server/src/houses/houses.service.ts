import { Injectable } from '@nestjs/common';
import { CreateHouseDto } from './dto/create-house.dto';
import { UpdateHouseDto } from './dto/update-house.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { ZapService } from 'src/zap/zap.service';

@Injectable()
export class HousesService {
  constructor(
    private prisma: PrismaService,
    private zapService: ZapService,
  ) {}
  async create(createHouseDto: CreateHouseDto) {
    const fetch = await this.zapService.test();

    const array = fetch.search.result.listings.map((l) => {
      const { id, description, address } = l.listing;
      return { id, description, address };
    });
    // const { id, description, address } =
    //   fetch.search.result.listings[0].listing;

    return array;

    // return await this.prisma.house.create({ data: { id: 'uuiasd' } });
  }

  async findAll() {
    return await this.prisma.house.findMany();
  }

  findOne(id: number) {
    return `This action returns a #${id} house`;
  }

  update(id: number, updateHouseDto: UpdateHouseDto) {
    return `This action updates a #${id} house`;
  }

  remove(id: number) {
    return `This action removes a #${id} house`;
  }
}
