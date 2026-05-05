import { Body, Controller, Post } from '@nestjs/common';
import { CategoryService } from '@/modules/Product/services';
import { CreateCategoryDto } from '@/modules/Product/dtos';

@Controller('category')
export class CategoryController {
  constructor(private service: CategoryService) {}

  @Post()
  public async create(@Body() data: CreateCategoryDto) {
    return await this.service.create(data);
  }
}
