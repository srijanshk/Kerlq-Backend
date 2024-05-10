import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

// Modules
import { DatabaseModule } from './database/database.module';
import { ClientModule } from './client/client.module';
import { LawyerModule } from './lawyer/lawyer.module';
import { MatterModule } from './matter/matter.module';


@Module({
  imports: [
    DatabaseModule,
    ClientModule,
    LawyerModule,
    MatterModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
