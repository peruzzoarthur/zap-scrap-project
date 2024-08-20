import { Injectable } from '@nestjs/common';
import { CreateMediaDto } from './dto/create-media.dto';
import { UpdateMediaDto } from './dto/update-media.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class MediasService {
  constructor(private prisma: PrismaService) {}
  async create(createMediaDto: CreateMediaDto) {
    return await this.prisma.media.create({
      data: {
        url: createMediaDto.url,
        house: {
          connect: {
            id: createMediaDto.houseId,
          },
        },
      },
    });
  }

  async findAll() {
    return await this.prisma.media.findMany();
  }

  findOne(id: number) {
    return `This action returns a #${id} media`;
  }

  update(id: number, updateMediaDto: UpdateMediaDto) {
    return `This action updates a #${id} media`;
  }

  remove(id: number) {
    return `This action removes a #${id} media`;
  }
}
