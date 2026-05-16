import { BaseDto } from '@/modules/Database/base';
import { DtoValidation } from '@/modules/Core/decorators';
import { ValidatorGroup } from '@/modules/Core/constants';
import { PartialType, PickType } from '@nestjs/mapped-types';
import {
  IsEnum,
  IsNotEmpty,
  IsOptional,
  IsUUID,
  ValidateIf,
} from 'class-validator';
import { OnlineStatus } from '@/modules/Product/constants';
import { CategoryEntity } from '@/modules/Product/entities';
import { IsDataExist, IsDataUnique } from '@/modules/Database/constraints';

class BaseCategoryDto extends BaseDto {
  @IsNotEmpty({
    message: '分类名称不能为空',
    groups: [ValidatorGroup.CREATE, ValidatorGroup.UPDATE],
  })
  @IsDataUnique(CategoryEntity, {
    message: '分类名称已存在',
    groups: [ValidatorGroup.CREATE],
  })
  @IsOptional({ groups: [ValidatorGroup.PAGE, ValidatorGroup.UPDATE] })
  name: string;

  @ValidateIf((o) => !!o.parent_id, { always: true })
  @IsUUID('all', {
    message: 'parent_id 必须是有效的 UUID',
    groups: [ValidatorGroup.CREATE, ValidatorGroup.UPDATE],
  })
  @IsDataExist(CategoryEntity, { message: '分类不存在', always: true })
  parent_id: string;

  @IsOptional({ always: true })
  @IsEnum(OnlineStatus, {
    message: `状态值只能属于 [${Object.values(OnlineStatus).join(', ')}]`,
    groups: [ValidatorGroup.CREATE, ValidatorGroup.UPDATE],
  })
  online: OnlineStatus;

  @IsOptional({ always: true })
  description: string;
}

@DtoValidation({ groups: [ValidatorGroup.CREATE] })
export class CreateCategoryDto extends PickType(BaseCategoryDto, [
  'name',
  'parent_id',
  'online',
] as const) {}

@DtoValidation({ groups: [ValidatorGroup.UPDATE] })
export class UpdateCategoryDto extends PartialType(BaseCategoryDto) {
  @IsNotEmpty({
    message: 'id不能为空',
    groups: [ValidatorGroup.UPDATE],
  })
  @IsUUID('all', { message: 'id格式不正确', always: true })
  @IsDataExist(CategoryEntity, { message: '该分类不存在', always: true })
  id: string;
}
