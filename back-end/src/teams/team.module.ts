import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { TeamSchema } from './team.model';
import { TeamController } from './team.controller';
import { TeamService } from './team.service';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Team', schema: TeamSchema }])],
  controllers: [TeamController],
  providers: [TeamService],
})
export class TeamsModule {}
