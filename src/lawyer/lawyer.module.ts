import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Lawyer } from './lawyer.entity';
import { LawyerController } from './lawyer.controller';
import { LawyerService } from './lawyer.service';

@Module({
  imports: [TypeOrmModule.forFeature([Lawyer])],
  providers: [LawyerService],
  controllers: [LawyerController],
  exports: [LawyerService],
})

export class LawyerModule {}
