import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { connectionParams } from '@/data-source';
import {
  DataExistConstraint,
  DataUniqueConstraint,
} from '@/modules/Database/constraints';

@Module({
  imports: [TypeOrmModule.forRoot(connectionParams)],
  providers: [DataExistConstraint, DataUniqueConstraint],
})
export class DatabaseModule {}
