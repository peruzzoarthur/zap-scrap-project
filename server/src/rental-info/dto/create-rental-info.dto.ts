import {
  IsString,
  // IsUUID,
  // IsOptional,
  IsArray,
  IsNumber,
} from 'class-validator';

export class CreateRentalInfoDto {
  @IsString()
  period: string;

  @IsArray()
  @IsString({ each: true })
  warranties: string[];

  @IsNumber()
  monthlyRentalTotalPrice: number;

  // @IsUUID()
  // @IsOptional()
  // pricingInfoId?: string;
}
