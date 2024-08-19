import { IsUUID, IsOptional, IsString } from 'class-validator';

export class CreateHouseDto {
  @IsString()
  @IsOptional()
  id: string;

  @IsUUID()
  @IsOptional()
  addressId: string;

  @IsUUID()
  @IsOptional()
  pricingInfoId: string;
}
