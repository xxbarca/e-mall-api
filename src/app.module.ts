import { Module } from '@nestjs/common';
import { DatabaseModule } from '@/modules/Database/database.module';
import { ProductModule } from '@/modules/Product/product.module';
import { CoreModule } from '@/modules/Core/core.module';

@Module({
  imports: [DatabaseModule, ProductModule, CoreModule.forRoot()],
  controllers: [],
  providers: [],
})
export class AppModule {}
