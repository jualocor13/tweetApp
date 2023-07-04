import { Body, Controller, Get, Post, Req, UseGuards } from '@nestjs/common';
import { Team } from './team.model';
import { TeamService } from './team.service';
import { AuthGuard } from '@nestjs/passport';

@Controller('teams')
export class TeamController {
  constructor(private readonly teamService: TeamService) {}

  @Post()
  @UseGuards(AuthGuard('jwt'))
  async addTeam(
    @Req() req: any,
    @Body('title') title: string,
    @Body('msg') msg: string,
  ) {
    const id = await this.teamService.insert(title, msg, req.user._id);
    return { id };
  }

  @Get()
  async getAllTeams(): Promise<Team[]> {
    const products = await this.teamService.getAll();
    return products;
  }

  //   @Get(':id')
  //   findProduct(@Param('id') id: string) {
  //     return this.productsService.find(id);
  //   }

  //   @Patch(':id')
  //   async updateProduct(
  //     @Param('id') id: string,
  //     @Body('title') title: string,
  //     @Body('description') description: string,
  //     @Body('price') price: number,
  //   ) {
  //     await this.productsService.update(id, title, description, price);
  //   }

  //   @Delete(':id')
  //   async deleteProduct(@Param('id') id: string): Promise<void> {
  //     await this.productsService.delete(id);
  //   }
}
