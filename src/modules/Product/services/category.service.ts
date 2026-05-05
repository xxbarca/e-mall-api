import { Injectable } from '@nestjs/common';
import { BaseService } from '@/modules/Database/base';
import { CategoryEntity } from '@/modules/Product/entities';
import { CategoryRepository } from '@/modules/Product/repositories';
import { CreateCategoryDto } from '@/modules/Product/dtos';

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
}
