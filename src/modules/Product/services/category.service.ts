import { Injectable } from '@nestjs/common';
import { BaseService } from '@/modules/Database/base';
import { CategoryEntity } from '@/modules/Product/entities';
import { CategoryRepository } from '@/modules/Product/repositories';
import { CreateCategoryDto, UpdateCategoryDto } from '@/modules/Product/dtos';
import { omit } from 'lodash';

@Injectable()
export class CategoryService extends BaseService<
  CategoryEntity,
  CategoryRepository
> {
  constructor(protected repository: CategoryRepository) {
    super(repository);
  }

  async create(data: CreateCategoryDto) {
    const item = await this.repository.save(data);
    return await super.detail(item.id);
  }

  async _update(data: UpdateCategoryDto) {
    await super.update(data.id, { ...omit(data, 'id') });
    return await super.detail(data.id);
  }
}
