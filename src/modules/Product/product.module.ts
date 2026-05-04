import { Module } from '@nestjs/common';
import * as controllers from '@/modules/Product/controllers';
import * as services from '@/modules/Product/services';
import * as repositories from '@/modules/Product/repositories';

@Module({
  controllers: Object.values(controllers),
  providers: [...Object.values(services), ...Object.values(repositories)],
})
export class ProductModule {}
