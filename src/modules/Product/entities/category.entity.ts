import { Column, Entity } from 'typeorm';
import { _BaseEntity } from '@/modules/Database/base';
import { OnlineStatus } from '@/modules/Product/constants';

@Entity('category')
export class CategoryEntity extends _BaseEntity {
  @Column({
    comment: '图片',
    nullable: true,
  })
  img: string;

  @Column({
    comment: '是否上线',
    type: 'enum',
    enum: OnlineStatus,
    default: OnlineStatus.ONLINE,
  })
  online: OnlineStatus;

  @Column({
    type: 'varchar',
    length: 100,
    nullable: false,
    unique: true,
  })
  name: string;
}
