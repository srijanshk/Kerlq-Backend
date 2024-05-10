import { Controller, Get, Post, Body, Delete, Param, Patch, Query } from '@nestjs/common';
import { MatterService } from './matter.service';
import { Matter } from './matter.entity';
import { CreateMatterDto } from './dto/createMatter.dto';
import { PaginationDto } from './dto/pagination.dto';


@Controller('matters')
export class MatterController {
  constructor(private matterService: MatterService) {}

  @Get()
  findAll(@Query() paginationDto: PaginationDto) {
    return this.matterService.findAll(paginationDto);
  }

  @Post()
  create(@Body() createMatterDto: CreateMatterDto) {
    return this.matterService.create(createMatterDto);
  }

  @Delete(':id')
  softDelete(@Param('id') id: number) {
    return this.matterService.softDelete(id);
  }

  @Patch('restore/:id')
  restore(@Param('id') id: number) {
    return this.matterService.restore(id);
  }

  @Get('/summary')
  getMattersSummary() {
    return this.matterService.countMattersByType();
  }

}
