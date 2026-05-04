import { BaseRepository } from '@/modules/Database/base';
import { CategoryEntity } from '@/modules/Product/entities';
import { DataSource } from 'typeorm';
import { Injectable } from '@nestjs/common';

@Injectable()
export class CategoryRepository extends BaseRepository<CategoryEntity> {
  protected _qbName: string = 'category';
  constructor(protected dataSource: DataSource) {
    super(CategoryEntity, dataSource.createEntityManager());
  }
}
