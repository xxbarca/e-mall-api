import { BaseRepository } from '@/modules/Database/base';
import { ObjectLiteral, SelectQueryBuilder } from 'typeorm';
import { QueryHook } from '@/modules/Database/helpers';
import { NotFoundException } from '@nestjs/common';

export class BaseService<E extends ObjectLiteral, R extends BaseRepository<E>> {
  /**
   * 服务默认存储类
   */
  protected repository: R;

  constructor(repository: R) {
    this.repository = repository;
    if (!(this.repository instanceof BaseRepository)) {
      throw new Error(
        'Repository must instance of BaseRepository in DataService!',
      );
    }
  }

  protected async buildItemQB(
    id: string,
    qb: SelectQueryBuilder<E>,
    callback?: QueryHook<E>,
  ) {
    qb.where(`${this.repository.qbName}.id = :id`, { id });
    return callback ? callback(qb) : qb;
  }

  async detail(id: string, callback?: QueryHook<E>): Promise<E> {
    const qb = await this.buildItemQB(
      id,
      this.repository.queryBuilder(),
      callback,
    );
    const item = await qb.getOne();
    if (!item) {
      throw new NotFoundException(`${this.repository.qbName} ${id} not exist`);
    }
    return item;
  }
}
