import { BaseDto } from '@/modules/Database/base';
import { DtoValidation } from '@/modules/Core/decorators';
import { ValidatorGroup } from '@/modules/Core/constants';
import { PickType } from '@nestjs/mapped-types';
import { IsNotEmpty, IsOptional } from 'class-validator';

class BaseCategoryDto extends BaseDto {
  @IsNotEmpty({
    message: '名称不能为空',
    groups: [ValidatorGroup.CREATE],
  })
  @IsOptional({ groups: [ValidatorGroup.PAGE, ValidatorGroup.UPDATE] })
  name: string;
}

@DtoValidation({ groups: [ValidatorGroup.CREATE] })
export class CreateCategoryDto extends PickType(BaseCategoryDto, [
  'name',
] as const) {}
