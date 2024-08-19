import { PartialType } from '@nestjs/mapped-types';
import { CreatePricingInfoDto } from './create-pricing-info.dto';

export class UpdatePricingInfoDto extends PartialType(CreatePricingInfoDto) {}
