import { Injectable } from '@nestjs/common';
import { BaseService } from '@/modules/Database/base';
import { CategoryEntity } from '@/modules/Product/entities';
import { CategoryRepository } from '@/modules/Product/repositories';

@Injectable()
export class CategoryService extends BaseService<
  CategoryEntity,
  CategoryRepository
> {
  constructor(protected repository: CategoryRepository) {
    super(repository);
  }
}
