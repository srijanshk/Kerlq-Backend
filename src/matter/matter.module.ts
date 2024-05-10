import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Matter } from './matter.entity';
import { MatterController } from './matter.controller';
import { MatterService } from './matter.service';

@Module({
  imports: [TypeOrmModule.forFeature([Matter])],
  providers: [MatterService],
  controllers: [MatterController],
  exports: [MatterService],
})

export class MatterModule {}
