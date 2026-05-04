import { BaseRepository } from '@/modules/Database/base';
import { ObjectLiteral } from 'typeorm';

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
}
