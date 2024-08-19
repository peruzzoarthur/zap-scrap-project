import { IsString, IsUUID, IsInt, IsOptional } from 'class-validator';

export class CreateAddressDto {
  @IsString()
  city: string;

  @IsString()
  neighborhood: string;

  @IsString()
  street: string;

  @IsString()
  streetNumber: string;

  @IsString()
  stateAcronym: string;

  @IsInt()
  pointId: number;
}
