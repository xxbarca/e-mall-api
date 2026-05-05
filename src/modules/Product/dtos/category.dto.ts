import { BaseDto } from '@/modules/Database/base';
import { DtoValidation } from '@/modules/Core/decorators';
import { ValidatorGroup } from '@/modules/Core/constants';
import { PickType } from '@nestjs/mapped-types';
import {
  IsEnum,
  IsNotEmpty,
  IsOptional,
  IsUUID,
  ValidateIf,
} from 'class-validator';
import { OnlineStatus } from '@/modules/Product/constants';

class BaseCategoryDto extends BaseDto {
  @IsNotEmpty({
    message: '分类名称不能为空',
    groups: [ValidatorGroup.CREATE],
  })
  @IsOptional({ groups: [ValidatorGroup.PAGE, ValidatorGroup.UPDATE] })
  name: string;

  @ValidateIf((o) => !!o.parent_id, { always: true })
  @IsUUID('all', {
    message: 'parent_id 必须是有效的 UUID',
    groups: [ValidatorGroup.CREATE, ValidatorGroup.UPDATE],
  })
  parent_id: string;

  @IsOptional({ always: true })
  @IsEnum(OnlineStatus, {
    message: `状态值只能属于 [${Object.values(OnlineStatus).join(', ')}]`,
    groups: [ValidatorGroup.CREATE, ValidatorGroup.UPDATE],
  })
  online: OnlineStatus;
}

@DtoValidation({ groups: [ValidatorGroup.CREATE] })
export class CreateCategoryDto extends PickType(BaseCategoryDto, [
  'name',
  'parent_id',
  'online',
] as const) {}
