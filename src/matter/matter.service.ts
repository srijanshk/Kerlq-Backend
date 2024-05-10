import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Matter } from './matter.entity';
import { CreateMatterDto } from './dto/createMatter.dto';
import { PaginationDto } from './dto/pagination.dto';

@Injectable()
export class MatterService {
  constructor(
    @InjectRepository(Matter)
    private matterRepository: Repository<Matter>,
  ) {}


  create(createMatterDto: CreateMatterDto) {
    const matter = this.matterRepository.create(createMatterDto);
    return this.matterRepository.save(matter);
  }

  async softDelete(matter_id: number) {
    await this.matterRepository.softDelete(matter_id);
  }

  async restore(matter_id: number) {
    await this.matterRepository.restore(matter_id);
  }

  async findAll(paginationDto: PaginationDto) {
    const { limit = 10, page = 1 } = paginationDto;
    const queryBuilder = this.matterRepository.createQueryBuilder('matter');
  
    queryBuilder.leftJoin('matter.client', 'client');
    queryBuilder.addSelect(['client.name']);
    queryBuilder.leftJoin('matter.lawyer', 'lawyer');
    queryBuilder.addSelect(['lawyer.name']);
  
    queryBuilder.where('matter.deletedAt IS NULL');
    queryBuilder.orderBy('client.name', 'ASC'); 
  
    queryBuilder.take(limit);
    queryBuilder.skip((page - 1) * limit);
  
    const [results, total] = await queryBuilder.getManyAndCount();
  
    const totalPages = Math.ceil(total / limit);
  
    return {
      data: results,
      total,
      totalPages,
      currentPage: page,
      limit
    };
  }
  

  async countMattersByType() {
    return this.matterRepository.createQueryBuilder("matter")
      .select("matter.matter_type", "type")
      .addSelect("COUNT(*)", "count")
      .groupBy("matter.matter_type")
      .getRawMany();
  }

  findOne(matter_id: number) {
    return this.matterRepository.findOne({
      where: {
        matter_id,
        deletedAt: null  // Only fetch if not deleted
      }
    });
  }
}