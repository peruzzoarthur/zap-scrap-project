import { IsString, IsUUID } from 'class-validator';

export class CreateMediaDto {
  @IsString()
  url: string;
  @IsUUID()
  houseId: string;
}
