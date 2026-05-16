import { Body, Controller, Patch, Post } from '@nestjs/common';
import { CategoryService } from '@/modules/Product/services';
import { CreateCategoryDto, UpdateCategoryDto } from '@/modules/Product/dtos';

@Controller('category')
export class CategoryController {
  constructor(private service: CategoryService) {}

  @Post()
  public async create(@Body() data: CreateCategoryDto) {
    return await this.service.create(data);
  }

  @Patch()
  public async update(@Body() data: UpdateCategoryDto) {
    return await this.service._update(data);
  }
}
