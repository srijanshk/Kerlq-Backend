import { Controller, Get } from '@nestjs/common';
import { LawyerService } from './lawyer.service';
import { Lawyer } from './lawyer.entity';

@Controller('lawyers')
export class LawyerController {
  constructor(private lawyerService: LawyerService) {}

  @Get()
  findAll(): Promise<Lawyer[]> {
    return this.lawyerService.findAll();
  }

}
