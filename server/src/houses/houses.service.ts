import { Injectable } from '@nestjs/common';
import { CreateHouseDto } from './dto/create-house.dto';
import { UpdateHouseDto } from './dto/update-house.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { ZapService } from 'src/zap/zap.service';
import { PointsService } from 'src/points/points.service';
import { AddressesService } from 'src/addresses/addresses.service';
import { RentalInfoService } from 'src/rental-info/rental-info.service';
import { PricingInfoService } from 'src/pricing-info/pricing-info.service';

@Injectable()
export class HousesService {
  constructor(
    private prisma: PrismaService,
    private zapService: ZapService,
    private pointsService: PointsService,
    private addressesService: AddressesService,
    private rentalInfoService: RentalInfoService,
    private pricingInfoService: PricingInfoService,
  ) {}

  async create(createHouseDto: CreateHouseDto) {
    return await this.prisma.house.create({
      data: {
        id: createHouseDto.id,
        addressId: createHouseDto.addressId,
        pricingInfoId: createHouseDto.pricingInfoId,
      },
    });
  }
  async fetchAndCreate() {
    const fetch = await this.zapService.parseJson();

    const array = fetch.map((l) => {
      const {
        id,
        title,
        description,
        address,
        totalAreas,
        usableAreas,
        bathrooms,
        bedrooms,
        usageTypes,
        pricingInfos,
        amenities,
        parkingSpaces,
        sourceId,
      } = l.listing;

      // const medias = l.medias;
      // console.log(savePoint);
      return {
        id,
        title,
        description,
        address,
        // medias,
        totalAreas,
        usableAreas,
        bathrooms,
        bedrooms,
        usageTypes,
        pricingInfos,
        amenities,
        parkingSpaces,
        sourceId,
      };
    });

    array.map(async (item) => {
      const savePoint = await this.pointsService.create({
        lat: item.address.point.lat,
        lon: item.address.point.lon,
        source: item.address.point.source,
      });
      const saveAddress = await this.addressesService.create({
        city: item.address.city,
        neighborhood: item.address.neighborhood,
        pointId: savePoint.id,
        stateAcronym: item.address.stateAcronym,
        street: item.address.street,
        streetNumber: item.address.streetNumber,
      });
      const pricingInfos = item.pricingInfos[0];
      const saveRentalInfo = await this.rentalInfoService.create({
        monthlyRentalTotalPrice:
          pricingInfos.rentalInfo.monthlyRentalTotalPrice,
        period: pricingInfos.rentalInfo.period,
        warranties: pricingInfos.rentalInfo.warranties,
      });
      const savePricingInfo = await this.pricingInfoService.create({
        businessType: pricingInfos.businessType,
        monthlyCondoFee: pricingInfos.monthlyCondoFee,
        price: pricingInfos.price,
        yearlyIptu: pricingInfos.yearlyIptu,
        rentalInfoId: saveRentalInfo.id,
      });
      const saveHouse = await this.prisma.house.create({
        data: {
          addressId: saveAddress.id,
          pricingInfoId: savePricingInfo.id,
        },
      });
      console.log(saveHouse);
    });

    return array;
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
