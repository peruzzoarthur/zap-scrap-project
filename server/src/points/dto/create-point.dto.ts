import { IsLatitude, IsLongitude, IsString } from 'class-validator';

export class CreatePointDto {
  @IsLatitude()
  lat: number;

  @IsLongitude()
  lon: number;

  @IsString()
  source: string;
}
