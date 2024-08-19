import { Injectable } from '@nestjs/common';
import { CreatePointDto } from './dto/create-point.dto';
import { UpdatePointDto } from './dto/update-point.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class PointsService {
  constructor(private prisma: PrismaService) {}

  async create(createPointDto: CreatePointDto) {
    const point = await this.prisma.point.create({
      data: {
        lat: createPointDto.lat,
        lon: createPointDto.lon,
        source: createPointDto.source,
      },
    });
    return point;
  }

  findAll() {
    return `This action returns all points`;
  }

  findOne(id: number) {
    return `This action returns a #${id} point`;
  }

  update(id: number, updatePointDto: UpdatePointDto) {
    return `This action updates a #${id} point`;
  }

  remove(id: number) {
    return `This action removes a #${id} point`;
  }
}
