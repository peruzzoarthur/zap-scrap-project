import { Injectable } from '@nestjs/common';
import { CreateAddressDto } from './dto/create-address.dto';
import { UpdateAddressDto } from './dto/update-address.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class AddressesService {
  constructor(private prisma: PrismaService) {}
  async create(createAddressDto: CreateAddressDto) {
    return await this.prisma.address.create({
      data: {
        city: createAddressDto.city ?? '?',
        neighborhood: createAddressDto.neighborhood ?? '?',
        stateAcronym: createAddressDto.stateAcronym ?? '?',
        street: createAddressDto.street ?? '?',
        streetNumber: createAddressDto.streetNumber ?? '?',
        pointId: createAddressDto.pointId,
      },
    });
  }

  findAll() {
    return `This action returns all addresses`;
  }

  findOne(id: number) {
    return `This action returns a #${id} address`;
  }

  update(id: number, updateAddressDto: UpdateAddressDto) {
    return `This action updates a #${id} address`;
  }

  remove(id: number) {
    return `This action removes a #${id} address`;
  }
}
