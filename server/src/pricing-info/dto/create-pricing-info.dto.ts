import { IsString, IsInt, IsUUID, IsOptional, IsNumber } from 'class-validator';

export class CreatePricingInfoDto {
  @IsString()
  businessType: string;

  @IsInt()
  yearlyIptu: number;

  @IsNumber()
  price: number;

  @IsNumber()
  monthlyCondoFee: number;

  @IsUUID()
  rentalInfoId: string;

  @IsUUID()
  @IsOptional()
  houseId?: string; // Assuming you might relate it to a House entity
}
