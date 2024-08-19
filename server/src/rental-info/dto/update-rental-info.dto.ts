import { PartialType } from '@nestjs/mapped-types';
import { CreateRentalInfoDto } from './create-rental-info.dto';

export class UpdateRentalInfoDto extends PartialType(CreateRentalInfoDto) {}
