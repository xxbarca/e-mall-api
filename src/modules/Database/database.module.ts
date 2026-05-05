import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { connectionParams } from '@/data-source';
import { DataExistConstraint } from '@/modules/Database/constraints';

@Module({
  imports: [TypeOrmModule.forRoot(connectionParams)],
  providers: [DataExistConstraint],
})
export class DatabaseModule {}
